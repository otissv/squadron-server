'use strict';

import test from 'tape';
import env from '../../../../server/env/development-env';
import fetch from '../../../../utils/utilsfetch-test';
import { eventsMock } from '../event-mock';

const API_URL = `${env.baseURL}/v01/graphql`;

test('Users controller', nested => {
  nested.test('eventsFind method: ', assert => {
    const query = {
      query:`
      {
        eventsFind {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          eventname
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
        const actaul = response.data.eventsFind;
        const expect = eventsMock;

        assert.deepEquals(actaul, expect,
          'Find all events');
      }
    });

    assert.end();
  });


  nested.test('eventFindById method: ', assert => {
    const id = eventsMock[0].id;

    const query = {
      query:` query eventFindById($id: String) {
        eventFindById (id: $id) {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          eventname
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
        const actaul = response.data.eventFindById;
        const expect = eventsMock[0];

        assert.deepEquals(actaul, expect,
          'Finds a event by id');
      }
    });

    assert.end();
  });


  nested.test('eventFindByUsername method: ', assert => {
    const eventname = eventsMock[0].eventname;

    const query = {
      query:` query eventFindByUsername($eventname: String) {
        eventFindByUsername (eventname: $eventname) {
          id
          created
          dateOfBirth
          email
          firstName
          lastLogin
          lastName
          telephone
          updated
          eventname
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
        "eventname": "${eventname}"
      }`
    };

    fetch({
      method: 'post',
      url   : API_URL,
      data: query,
      assert: (response) => {
        const actaul = response.data.eventFindByUsername;
        const expect = eventsMock[0];

        assert.deepEquals(actaul, expect,
          'Finds a event by eventname');
      }
    });

    assert.end();
  });
});
