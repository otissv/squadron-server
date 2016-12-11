/*
* Production enviorment
* */

'use strict';

import services from '../../../services';

const { host, port } = services.production.server;

export default {
  port,
  baseURL: `${host}:${port}`,
  title  : "Squadron server",
  mongodb     : {
    uri  : 'path/to/database/location',
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
  services: services.production
};
