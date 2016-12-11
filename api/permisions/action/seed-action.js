'use strict';

import databases from '../../../server/databases';
import { env } from '../../../server/env/environment.js';
import { actionsMock } from './mock-action';

const redis = databases.redis.connect(env().redis);

export default function seedTable () {
  actionsMock.forEach(item => {
    item.roles.forEach(role => {
      redis.sadd(item.key, role)
      .then(response => {
        console.log(response);
        console.log('Action mocks added to database');
      })
      .catch(error => {
        console.log(error);
      });
    });
  });
};
