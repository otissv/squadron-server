'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../../server/env/environment.js';
import { seed } from '../../../../rethinkdb-utils';
import { notesMock } from './note-mock';

const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);
const TABLE = 'notes';

export default function seedTable() {
  seed({
    data     : notesMock,
    db       : r,
    tableName: TABLE
  })
};
