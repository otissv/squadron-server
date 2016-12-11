'use strict';


import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../../server/env/environment';
import { seed } from '../../../../rethinkdb-utils';
import { rolesMock } from './mock-role';
import {
  ROLES_TABLE
} from '../../server-constants';


const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);


export default function seedTable () {
  seed({
    data     : rolesMock,
    db       : r,
    tableName: ROLES_TABLE,
    indexes  : ['type']
  });
};
