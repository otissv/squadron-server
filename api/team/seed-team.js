'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../server/env/environment.js';
import { seed } from '../../../rethinkdb-utils';
import { teamsMock } from './mock-team';
import {
  TEAMS_TABLE
} from '../server-constants';


const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);


export default function seedTable () {
  seed({
    data     : teamsMock,
    db       : r,
    tableName: TEAMS_TABLE,
    indexes  : ['name']
  });
};
