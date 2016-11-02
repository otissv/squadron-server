'use strict';

import test from 'tape';
import env from '../../../../server/env/development-env';
import fetch from '../../../../utils/utilsfetch-test';
import { usersMock } from '../user-mock';

const API_URL = `${env.baseURL}/v01/graphql`;

test('Users controller', nested => {
  nested.test('usersFind method: ', assert => {
    const query = {
      query:`
      {
        usersFind {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          username
          addresses {
          id
          }
          notes {
            id
          }
          createdBy {
            id
          }
          updatedBy {
            id
          }
        }
      }`
    };


    fetch({
      method: 'post',
      url   : API_URL,
      data: query,
      assert: (response) => {
        const actaul = response.data.usersFind;
        const expect = usersMock;

        assert.deepEquals(actaul, expect,
          'Find all users');
      }
    });

    assert.end();
  });


  nested.test('userFindById method: ', assert => {
    const id = usersMock[0].id;

    const query = {
      query:` query userFindById($id: String) {
        userFindById (id: $id) {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          username
          addresses {
          id
          }
          notes {
            id
          }
          createdBy {
            id
          }
          updatedBy {
            id
          }
        }
      }`,
      variables: `{
        "id": "${id}"
      }`
    };

    fetch({
      method: 'post',
      url   : API_URL,
      data: query,
      assert: (response) => {
        const actaul = response.data.userFindById;
        const expect = usersMock[0];

        assert.deepEquals(actaul, expect,
          'Finds a user by id');
      }
    });

    assert.end();
  });


  nested.test('userFindByUsername method: ', assert => {
    const username = usersMock[0].username;

    const query = {
      query:` query userFindByUsername($username: String) {
        userFindByUsername (username: $username) {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          username
          addresses {
          id
          }
          notes {
            id
          }
          createdBy {
            id
          }
          updatedBy {
            id
          }
        }
      }`,
      variables: `{
        "username": "${username}"
      }`
    };

    fetch({
      method: 'post',
      url   : API_URL,
      data: query,
      assert: (response) => {
        const actaul = response.data.userFindByUsername;
        const expect = usersMock[0];

        assert.deepEquals(actaul, expect,
          'Finds a user by username');
      }
    });

    assert.end();
  });
});
