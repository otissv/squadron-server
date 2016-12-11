'use strict';

import test from 'tape';
import env from '../../../server/env/development-env';
import fetch from '../../../utils/utilsfetch-test';
import { rolesMock } from './mock-role';

const API_URL = `${env.baseURL}/v01/graphql`;

test('Users controller', nested => {
  nested.test('rolesFind method: ', assert => {
    const query = {
      query:`
      {
        rolesFind {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          rolename
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
        const actaul = response.data.rolesFind;
        const expect = rolesMock;

        assert.deepEquals(actaul, expect,
          'Find all roles');
      }
    });

    assert.end();
  });


  nested.test('roleFindById method: ', assert => {
    const id = rolesMock[0].id;

    const query = {
      query:` query roleFindById($id: String) {
        roleFindById (id: $id) {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          rolename
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
        const actaul = response.data.roleFindById;
        const expect = rolesMock[0];

        assert.deepEquals(actaul, expect,
          'Finds a role by id');
      }
    });

    assert.end();
  });


  nested.test('roleFindByUsername method: ', assert => {
    const rolename = rolesMock[0].rolename;

    const query = {
      query:` query roleFindByUsername($rolename: String) {
        roleFindByUsername (rolename: $rolename) {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          rolename
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
        "rolename": "${rolename}"
      }`
    };

    fetch({
      method: 'post',
      url   : API_URL,
      data: query,
      assert: (response) => {
        const actaul = response.data.roleFindByUsername;
        const expect = rolesMock[0];

        assert.deepEquals(actaul, expect,
          'Finds a role by rolename');
      }
    });

    assert.end();
  });
});
