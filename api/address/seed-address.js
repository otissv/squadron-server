'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../server/env/environment.js';
import { seed } from '../../../rethinkdb-utils';
import { addressesMock } from './mock-address';
import {
  ADRESSES_TABLE
} from '../server-constants';

const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);



export default function seedTable () {
  seed({
    data     : addressesMock,
    db       : r,
    tableName: ADRESSES_TABLE
  });
};
