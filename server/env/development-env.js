/*
* Development enviorments config
*/

'use strict';

import services from '../../../services';

const { host, port } = services.development.server;

export default {
  port,
  baseURL: `${host}:${port}`,
  title  : 'Squadron server' + ' Dev',
  mongodb: {
    uri : 'mongodb://127.0.0.1:27017/test',
    opts: {
      server: {
        socketOptions: { keepAlive: 1 }
      }
    }
  },
  redis: {
    uri : '127.0.0.1',
    port: 6379
  },
  rethinkdb: {
    port: 28015,
    host: 'localhost',
    db  : 'test'
  },
  services: services.development
};
