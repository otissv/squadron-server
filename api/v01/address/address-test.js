'use strict';

import test from 'tape';
import env from '../../../server/env/development-env';
import fetch from '../../../utils/utils-fetch-test';
import { addressesMock } from './address-mock';

const API_URL = `${env.baseURL}/v01/graphql`;

test('Address controller', nested => {
  nested.test('addressesFind: ', assert => {
    const query = {
      query:`
      {
        addressesFind {
          id
          address1
          address2
          city
          country
          created
          current
          postCode
          rooms
          state
          status
          updated
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
        const actaul = response.data.addressesFind;
        const expect = addressesMock;

        assert.deepEquals(actaul, expect,
          'Find all address');
      }
    });

    assert.end();
  });


  nested.test('addressFindById: ', assert => {
    const id = addressesMock[0].id;

    const query = {
      query:` query addressFindById($id: String) {
        addressFindById (id: $id) {
          id
          address1
          address2
          city
          country
          created
          current
          postCode
          rooms
          state
          status
          updated
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
        const actaul = response.data.addressFindById;
        const expect = addressesMock[0];

        assert.deepEquals(actaul, expect,
          'Find an address by id');
      }
    });

    assert.end();
  });

});
