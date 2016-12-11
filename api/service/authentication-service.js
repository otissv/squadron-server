/*
* Authentication services
*
* Sends requests to the authentication services
 */

'use strict';

import axios from 'axios';
import User from '../user/connector-user';
import {
  promise,
  generateHash,
  compareHash
} from '../../../squadron-utils/';
import ERROR from '../error/error';
import { cleanObjAll } from 'ufunc';


function buildQuery ({ action, query, type, variables }) {
  const idx = query.substr(0, 7) === 'query {' ? 3 : 2;
  const args = query.split('{')[idx].split('}')[0].trim();
  const argumentsSring = Object.keys(variables).map(k => `${k}: $${k}`).toString();
  const typeString = Object.keys(variables).map(k => `$${k}: String`).toString();
  const variablesString = Object.keys(variables).map(k => `"${k}": "${variables[k]}"`).toString();

  return {
    query: `${type} ${action} (${typeString}) {
      ${action} (${argumentsSring}) {
        ${args}
      }
    }`,
    variables: `{
      ${variablesString}
    }`
  };
};


function authenticate ({ body, config, client }) {
  const user = new User();
  const variables = typeof body.variables === 'string'
    ? JSON.parse(body.variables)
    : body.variables;

  const { username, password } = variables;

  return promise((resolve, reject) => {
    // check if user already exists
    user.findIdByUsername({
      args: { username: username }
    })
    .then(response => {
console.log(response);
      // check if user's password is vaild
      if (!response) return reject(ERROR.INCORRECT_CREDENTIALS);

      // build graphql service
      const data = {
        ...buildQuery({
          action: body.action,
          query: body.query,
          variables: {
            id: response.id,
            password
          },
          type: 'query'
        }),
        client
      };

      // send to authentication service
      resolve(axios({ ...config, data }));
    })
    .catch(error => reject(error));
  });
}


function register ({ body, config, client }) {
  const user = new User();
  const variables = typeof body.variables === 'string'
    ? JSON.parse(body.variables)
    : body.variables;
  const { username, password } = variables;

  return promise((resolve, reject) => {
    // check if user already exists
    user.findIdByUsername({
      args: { username }
    })
    .then(response => {
      if (response) return reject(ERROR.USER_ALREADY_EXISTS);

      // create user if it doesn't exist
      const args = cleanObjAll({
        ...variables,
        password: null
      })
      user.create({
        args
      })
      .then(response => {
        // build graphql service
        const data = {
          ...buildQuery({
            action: body.action,
            query: body.query,
            variables: {
              ...variables,
              id: response.id,
              password
            },
            type: 'mutation'
          }),
          client
        };

        // send to authentication service
        resolve(axios({
          ...config, data
        }))
      })
      .catch(error => reject(error));
    })
    .catch(error => reject(error));
  });
}


function unauthenticate ({ body, config, client }) {
  const variables = typeof body.variables === 'string'
    ? JSON.parse(body.variables).id
    : body.variables.id;

  const data = {
    ...buildQuery({
      action: body.action,
      query: body.query,
      variables: { id },
      type: 'mutation'
    }),
    client
  };


  return axios({ ...config, data });
}


export default function authenication ({ body, service, client }) {
  const { host, port } = service;

  const config = {
    url: `${host}:${port}/v01/graphql/`,
    method: 'POST',
    options: {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  };

  switch (body.action) {
    case 'authenticate':
      return authenticate({ body, config, client });

    case 'register':
      return register({ body, config, client });

    case 'unauthenticate':
      return unauthenticate({ body, config, client });
  }
}
