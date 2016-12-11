'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../server/env/environment.js';
import { seed } from '../../../rethinkdb-utils';
import { fiscalYearsMock } from './mock-fiscalYear';
import {
  FISCAL_YEARS_TABLE
} from '../server-constants';


const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);

export default function seedTable () {
  seed({
    data     : fiscalYearsMock,
    db       : r,
    tableName: FISCAL_YEARS_TABLE,
    indexes  : ['active']
  });
};
