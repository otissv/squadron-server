'use strict';

import R from 'ramda';
import rethinkdbdash from 'rethinkdbdash';
import { promise } from '../../../squadron-utils';
import { insert } from '../../../rethinkdb-utils';
import { env } from '../../server/env/environment.js';
import {
  ADRESSES_TABLE
} from '../server-constants';

const r = rethinkdbdash(env().rethinkdb);


export default class Address {
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
      db   : r,
      fn   : callback,
      table: ADRESSES_TABLE
    });
  }


  findAll ({ query, args, validation }) {
    return promise((resolve, reject) => {
      r.table(ADRESSES_TABLE)
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

    if (Array.isArray(args || query)) {
      getDocuments = r.table(ADRESSES_TABLE).getAll(...obj.map(i => i.id));
    } else {
      getDocuments = r.table(ADRESSES_TABLE).get(obj.id);
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

  remove ({ args, validation }) {
    const id = args.id;

    return promise((resolve, reject) => {
      r.table(ADRESSES_TABLE)
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
      r.table(ADRESSES_TABLE)
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
