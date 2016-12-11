'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../server/env/environment.js';
import { seed } from '../../../rethinkdb-utils';
import { usersMock } from './mock-user';
import {
  USERS_TABLE
} from '../server-constants';


const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);


export default function seedTable () {
  seed({
    data     : usersMock,
    db       : r,
    tableName:   USERS_TABLE,
    indexes  : ['username']
  });
};
