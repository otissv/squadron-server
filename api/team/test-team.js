'use strict';

import test from 'tape';
import env from '../../server/env/development-env';
import fetch from '../../utils/utilsfetch-test';
import { teamsMock } from './team-mock';

const API_URL = `${env.baseURL}/v01/graphql`;

test('Teams controller', nested => {
  nested.test('teamsFind method: ', assert => {
    const query = {
      query:`
      {
        teamsFind {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          teamname
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
        const actaul = response.data.teamsFind;
        const expect = teamsMock;

        assert.deepEquals(actaul, expect,
          'Find all teams');
      }
    });

    assert.end();
  });


  nested.test('teamFindById method: ', assert => {
    const id = teamsMock[0].id;

    const query = {
      query:` query teamFindById($id: String) {
        teamFindById (id: $id) {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          teamname
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
        const actaul = response.data.teamFindById;
        const expect = teamsMock[0];

        assert.deepEquals(actaul, expect,
          'Finds a team by id');
      }
    });

    assert.end();
  });


  nested.test('teamFindByTeamname method: ', assert => {
    const teamname = teamsMock[0].teamname;

    const query = {
      query:` query teamFindByTeamname($teamname: String) {
        teamFindByTeamname (teamname: $teamname) {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          teamname
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
        "teamname": "${teamname}"
      }`
    };

    fetch({
      method: 'post',
      url   : API_URL,
      data: query,
      assert: (response) => {
        const actaul = response.data.teamFindByTeamname;
        const expect = teamsMock[0];

        assert.deepEquals(actaul, expect,
          'Finds a team by teamname');
      }
    });

    assert.end();
  });
});
