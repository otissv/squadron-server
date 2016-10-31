'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../../server/env/environment.js';
import { seed } from '../../../../rethinkdb-utils';
import { addressesMock } from './address-mock';

const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);
const TABLE = 'address';


export default function seedTable() {
  seed({
    data     : addressesMock,
    db       : r,
    tableName: TABLE
  })
};
