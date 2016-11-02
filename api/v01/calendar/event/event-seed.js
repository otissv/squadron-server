'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../../../server/env/environment.js';
import { seed } from '../../../../../rethinkdb-utils';
import { eventsMock } from '../event-mock';

const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);
const TABLE = 'events';

export default function seedTable() {
  seed({
    data     : eventsMock,
    db       : r,
    tableName: TABLE,
    indexes  : ['eventname']
  })
};
