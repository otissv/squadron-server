'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../../server/env/environment.js';
import { seed } from '../../../../rethinkdb-utils';
import { usersMock } from './user-mock';

const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);
const TABLE = 'users';

export default function seedTable() {
  seed({
    data     : usersMock,
    db       : r,
    tableName: TABLE,
    indexes  : ['username']
  })
};
