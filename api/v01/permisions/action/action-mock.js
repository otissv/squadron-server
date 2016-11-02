'use strict';

import { find, findById, findByField } from '../../../../../squadron-utils';
import { env } from '../../../../server/env/environment.js';

const SERVICE = env().services.server.host.replace(/http:\/\//i, '');

export const actionsMock = [
  {
    key: `${SERVICE}:actions:ADDRESS_FIND_ALL`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:ADDRESS_FIND_BY_ID`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:ADDRESS_CREATE`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:ADDRESS_UPDATE`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:ADDRESS_REMOVE`,
    roles: ['admin', 'user']
  },


  {
    key: `${SERVICE}:actions:NOTE_FIND_ALL`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:NOTE_FIND_BY_ID`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:NOTE_UPDATE`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:NOTE_CREATE`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:NOTE_REMOVE`,
    roles: ['admin', 'user']
  },


  {
    key: `${SERVICE}:actions:ROLE_FIND_ALL`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:ROLE_FIND_BY_ID`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:ROLE_FIND_BY_TYPE`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:ROLE_CREATE`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:ROLE_UPDATE`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:ROLE_REMOVE`,
    roles: ['admin', 'user']
  },


  {
    key: `${SERVICE}:actions:USER_CREATE`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:USER_FIND_ALL`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:USER_FIND_BY_ID`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:USER_FIND_ID_BY_USERNAME`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:USER_FIND_BY_USERNAME`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:USER_REMOVE`,
    roles: ['admin', 'user']
  },
  {
    key: `${SERVICE}:actions:USER_UPDATE`,
    roles: ['admin', 'user']
  }
];


export default class ActionMock {
  find (query) {
    return find({
      query,
      mock: actionsMock,
    });
  }

  findById (query) {
    return findById({
      query,
      mock: actionsMock,
    });
  }

  findByType (query) {
    return findByField({
      query,
      mock: actionsMock,
      field: 'type'
    });
  }
}
