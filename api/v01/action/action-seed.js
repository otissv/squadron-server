'use strict';

import R from 'ramda';
import databases from '../../../server/databases';
import rethinkdbdash from 'rethinkdbdash';
import { env } from '../../../server/env/environment.js';
import { seed } from '../../../../rethinkdb-utils';
import { actionsMock } from './action-mock';

const redis = databases.redis.connect(env().redis);

export default function seedTable() {
  actionsMock.forEach(item => {
    item.roles.forEach(role => {
      redis.sadd(item.key, role)
      .then(response => {
        console.log(response);
        console.log('Action mocks added to database');
      })
      .catch(error => {
        console.log(error);
      })
    })
  })
};
