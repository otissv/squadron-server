'use strict';

import { promise } from '../../../../../squadron-utils';
import mapPromise from 'map-async-promise';
import { env } from '../../../../server/env/environment.js';
import ERROR from '../../error/error';
import redis from '../../../../server/databases/redis';


const TABLE = 'actions';


export default class Action {
  constructor () {
    this.redis = redis.connect(env().redis);
  }


  _add ({resolve, reject, key, role, redis }) {
    this.redis.sadd(key, role)
    .then(response => {
      if (response === 0) {
        this._has ({resolve, reject, key, type, role, redis });
      }
      else {
        resolve(role);
      }
    })
    .catch(error => {
      console.log(error);
      reject(error);
    });
  }


  _has ({resolve, reject, key, type, role, redis }) {
    this.redis.sismember(key, role)
      .then(response => {
        if (response === 0) {
          console.log(ERROR.ACTION_DOES_NOT_HAVE_ROLE);
          reject(ERROR.ACTION_DOES_NOT_HAVE_ROLE);

        } else {
          return resolve({
            type,
            roles: [role]
          });
        }
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  }


  _makeKey ({ service, type }) {
    const SERVICE = service.replace(/http:\/\//i, '');
    return `${SERVICE}:actions:${type}`;
  }


  add ({ args, req, locals }) {
    const type = args.type.toUpperCase();
    const roles = args.roles.map(i => i.toLowerCase());
    const key = this._makeKey({ type, service: locals.services.server.host });

    const addRoles = (resolve, reject, role, index, arr) => {
       this._add ({resolve, reject, key, role, redis });
    };

    return promise((resolve, reject) => {
      mapPromise(addRoles)(roles)
      .then(response => {
        resolve({
          type,
          roles: response
        });
      })
      .catch(error => {
        reject(error);
      });
    });
  }


  findAll ({ args, req, locals }) {
    const type = args.type.toUpperCase();
    const key = this._makeKey({ type, service: locals.services.server.host });

    return promise((resolve, reject) => {
      this.redis.smembers(key)
        .then(response => {
          if (response.length === 0) {
            return reject(ERROR.NO_ACTION_FOUND);

          } else {
            return resolve({
              type,
              roles: response
            });
          }
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }


  has ({ args, req, locals }) {
    const type = args.type.toUpperCase();
    const role = args.role.toLowerCase();
    const key = this._makeKey({ type, service: locals.services.server.host });

    return promise((resolve, reject) => {
      this._has({ resolve, reject, key, type, role, redis });
    });
  }


  remove ({ args, req, locals }) {
    const type = args.type.toUpperCase();
    const key = this._makeKey({ type, service: locals.services.server.host });

    return promise((resolve, reject) => {
      this.redis.del(key)
      .then(response => {
        if (response === 0) {
          reject(ERORR.ACTION_NOT_DELETED);
        }
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }


  update ({ args, req, locals }) {
    const type = args.type.toUpperCase();
    const roles = args.roles.map(i => i.toLowerCase());
    const key = this._makeKey({ type, service: locals.services.server.host });

    const addRoles = (resolve, reject, role, index, arr) => {
       this._add ({resolve, reject, key, role, redis });
    };

    return promise((resolve, reject) => {
      this.redis.del(key)
      .then(response => {
        mapPromise(addRoles)(roles)
        .then(response => {
          resolve({
            type,
            roles: response
          });
        })
        .catch(error => {
          reject(error);
        });
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
    });
  }
}
