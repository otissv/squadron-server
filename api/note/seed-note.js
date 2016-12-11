'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../server/env/environment.js';
import { seed } from '../../../rethinkdb-utils';
import { notesMock } from './mock-note';
import {
  NOTES_TABLE
} from '../server-constants';


const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);

export default function seedTable () {
  seed({
    data     : notesMock,
    db       : r,
    tableName: NOTES_TABLE
  });
};
