/*
* Application routes
*/

'use strict';

import { apolloServer } from 'apollo-server';
import connectors from './connectors';
import resolvers from './resolvers';
import schema from './schemas';
import validation from './validation';
import {
  authenication,
  authorised
} from './service/sevice';
import { token } from '../../secret';
import ERROR from '../v01/error/error';


function apolloConfig ({ context, mock, req, locals }) {
  return {
    schema: schema,
    resolvers: resolvers,
    connectors: connectors(mock),
    context: {
      ...context,
      locals,
      req,
      validation
    }
  };
}


export default function appRoutes (app, context) {
  const locals = app.locals;

  app.use('/v01/auth/', (req, res, next) => {
    console.log(req.body);
    authenication({
      body: req.body,
      client: {
        host: app.locals.services.server.host.replace(/http:\/\//i, ''),
        token
      },
      service: locals.services.authentication
    })
    .then(response => {
      if (response.data.errors) {
        console.error(response.data.errors);
        if (response.data.errors[0].message === 'No user found.') {
          // regiter user
          console.log('need to create');
        } else {
          return res.json(ERROR.INTERNAL_SERVER);
        }
      }

      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.json(error);
    });
  });

  app.use('/v01/graphql', (req, res, next) => {
    const service = app.locals.services.authentication;

    authorised({
      service,
      auth: req.body.auth
    })
    .then(response => {
      if (response.data.data.authorised._result_) {
        const { id, roles } = response.data.data.authorised;

        app.locals.user = { id, roles };
        next();
      }
    })
    .catch(error => {
      console.error(error);
      res.json(ERROR.ACCESS_DENIED);
    });
  });


  app.use('/v01/graphql', apolloServer(req => {
    /* eslint-disable no-unneeded-ternary */
    const mock = req.body.mock === 'true' ? true : false;
    /* eslint-enable no-unneeded-ternary */
console.log(req.body);
    return {
      ...apolloConfig({ context, mock, req, locals })
    };
  }));


  // admin only route
  app.use('/v01/graphiql', apolloServer(req => {
    /* eslint-disable no-unneeded-ternary */
    const mock = req.body.mock === 'true' ? true : false;
    /* eslint-enable no-unneeded-ternary */

    const graphiql = true;

    return {
      ...apolloConfig({ context, mock, req, locals }),
      graphiql
    };
  }));
}
