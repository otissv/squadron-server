'use strict';

import test from 'tape';
import env from '../../server/env/development-env';
import fetch from '../../utils/utils-fetch-test';
import { fiscalYearsMock } from './mock-fiscalYear';

const API_URL = `${env.baseURL}/v01/graphql`;

test('FiscalYear controller', nested => {
  nested.test('fiscalYearsFind: ', assert => {
    const query = {
      query:`
      {
        fiscalYearsFind {
          id
          created
          flag
          fiscalYear
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
        const actaul = response.data.fiscalYearsFind;
        const expect = fiscalYearsMock;

        assert.deepEquals(actaul, expect,
          'Find all fiscalYears');
      }
    });

    assert.end();
  });


  nested.test('fiscalYearFindById: ', assert => {
    const id = fiscalYearsMock[0].id;

    const query = {
      query:` query fiscalYearFindById($id: String) {
        fiscalYearFindById (id: $id) {
          id
          created
          flag
          fiscalYear
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
        const actaul = response.data.fiscalYearFindById;
        const expect = fiscalYearsMock[0];

        assert.deepEquals(actaul, expect,
          'Find an fiscalYear by id');
      }
    });

    assert.end();
  });
});
