/*
* redis connection
*/

'use strict';

import redisP from 'promise-redis';
import Promise from 'bluebird';

const redis = redisP(resolver => new Promise(resolver));

export function connection ({ port, uri }) {

  let client;
  client = redis.createClient({ port, uri });

  // Event handlers
  client.on('connect', () => {
    console.log(`Redis connected to ${uri}:${port}`);
  });


  client.on('end', () => {
    console.log('Redis disconnected');
    client.quit();
  });

  client.on('error', function (err) {
    console.log('Error ' + err);
  });

  // Return instance of redis client
  return client;
};

export default {
  connect: (options) => connection(options)
};
