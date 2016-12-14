'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { promise } from '../../../squadron-utils';
import { insert } from '../../../rethinkdb-utils';
import { env } from '../../server/env/environment.js';
import ERROR from '../error/error.js';
import {
  USERS_TABLE
} from '../server-constants';


const dbConfig = env().rethinkdb;
const r = rethinkdbdash(dbConfig);


export default class User {
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
      tableName: USERS_TABLE
    });
  }


  findAll ({ args, locals, validation }) {
    return promise((resolve, reject) => {
      r.table(USERS_TABLE)
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


  findById ({ query, args, validation, locals }) {
    let obj = args || query;
    let getDocuments;

    if (Array.isArray(obj)) {
      getDocuments = r.table(USERS_TABLE).getAll(...obj.map(i => i));
    } else {
      getDocuments = r.table(USERS_TABLE).get(obj.id);
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


  findByUsername ({ args }) {
    const username = args.username;
    const index = { index : 'username' };

    return promise((resolve, reject) => {
      r.table(USERS_TABLE)
        .getAll(username, index)
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


  findIdByUsername ({ args }) {
    const username = args.username;
    const index = { index : 'username' };

    return promise((resolve, reject) => {
      r.table(USERS_TABLE)
        .getAll(username, index)
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
      r.table(USERS_TABLE)
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
      r.table(USERS_TABLE)
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
