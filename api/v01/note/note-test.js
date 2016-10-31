'use strict';

import test from 'tape';
import env from '../../../server/env/development-env';
import fetch from '../../../utils/utils-fetch-test';
import { notesMock } from './note-mock';

const API_URL = `${env.baseURL}/v01/graphql`;

test('Note controller', nested => {
  nested.test('notesFind: ', assert => {
    const query = {
      query:`
      {
        notesFind {
          id
          created
          flag
          note
          updated
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
        const actaul = response.data.notesFind;
        const expect = notesMock;

        assert.deepEquals(actaul, expect,
          'Find all notes');
      }
    });

    assert.end();
  });


  nested.test('noteFindById: ', assert => {
    const id = notesMock[0].id;

    const query = {
      query:` query noteFindById($id: String) {
        noteFindById (id: $id) {
          id
          created
          flag
          note
          updated
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
        const actaul = response.data.noteFindById;
        const expect = notesMock[0];

        assert.deepEquals(actaul, expect,
          'Find an note by id');
      }
    });

    assert.end();
  });
});
