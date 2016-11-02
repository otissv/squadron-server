'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../../server/env/environment.js';
import { seed } from '../../../../rethinkdb-utils';
import { rolesMock } from './role-mock';

const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);
const TABLE = 'roles';

export default function seedTable() {
  seed({
    data     : rolesMock,
    db       : r,
    tableName: TABLE,
    indexes  : ['type']
  })
};
