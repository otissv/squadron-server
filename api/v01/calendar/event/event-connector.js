'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { promise } from '../../../../../squadron-utils';
import { insert } from '../../../../../rethinkdb-utils';
import { env } from '../../../../server/env/environment.js';
import ERROR from '../error/error.js';


const TABLE = 'events';
const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);


export default class Event {
  create ({ args, validation }) {
    const data = args;
    function callback (resolve) {
      return R.curry((response) => {
        if (response.errors) return response.errors;

        return resolve({
          ...data,
          id: response.generated_keys[0]
        });
      });
    }

    return insert({
      data,
      db       : r,
      dbName   : dbConfig.db,
      fn       : callback,
      tableName: TABLE
    });
  }


  findAll ({ args, locals, validation }) {
    console.log('findAll');
    return promise((resolve, reject) => {
      r.table(TABLE)
        .run()
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }


  findById ({ query, args, validation }) {
    let obj = args || query;
    let getDocuments;

    if (Array.isArray(obj)) {
      getDocuments = r.table(TABLE).getAll(...obj.map(i => i.id));
    } else {
      getDocuments = r.table(TABLE).get(obj.id);
    }

    return promise((resolve, reject) => {
      getDocuments
        .run()
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }


  findByEventname ({ args }) {
    const eventname = args.eventname;
    const index = { index : 'eventname' };

    return promise((resolve, reject) => {
      r.table(TABLE)
        .getAll(eventname, index)
        .run()
        .then(response => {
          resolve(response[0]);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }


  findIdByEventname ({ args }) {
    const eventname = args.eventname;
    const index = { index : 'eventname' };

    return promise((resolve, reject) => {
      r.table(TABLE)
        .getAll(eventname, index)
        .pluck('id')
        .run()
        .then(response => {
          resolve(response[0]);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }


  remove ({ args }) {
    const id = args.id;

    return promise((resolve, reject) => {
      r.table(TABLE)
        .getAll(id)
        .delete()
        .run()
        .then(response => {
          resolve(response[0]);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }


  update ({ args, validation }) {
    const id = args.id;

    return promise((resolve, reject) => {
      r.table(TABLE)
        .get(id)
        .update(args)
        .run()
        .then(response => {
          resolve(this.findById({
            args: { id }
          }));
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
}