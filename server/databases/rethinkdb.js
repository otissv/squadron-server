'use strict';


import rethinkdbdash from 'rethinkdbdash';

export function connection ({ port, host, db }) {
  return rethinkdbdash({ port, host, db });
}


export default {
  connect: (options) => connection(options)
};
