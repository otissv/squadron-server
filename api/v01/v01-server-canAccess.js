import { env } from '../../server/env/environment.js';
import { promise } from '../../../squadron-utils';
import redis from '../../server/databases/redis';
import ERROR from './error/error.js';


export default function canAccess ({ type, locals }) {
  const client = redis.connect(env().redis);
  const SERVICE = locals.services.server.host.replace(/http:\/\//i, '');
  const roles = locals.user.roles;
  const key = `${SERVICE}:actions:${type}`;

  if (type == null) {
    throw new Error('Action type cannot be null or undefied');
  }

  return function ({ args, context, fn }) {
    return promise((resolve, reject) => {
      client.smembers(key)
        .then(response => {
          if (response === 0) {
            console.log(ERROR.ACTION_DOES_NOT_HAVE_ROLE);
            return reject(false);
          }

          const result = response.map(member => roles.some(role => role === member));

          if (result.some(r => r === true)) return resolve(fn({ args, context }));

          console.error(`${ERROR.ACCESS_DENIED.message.error} for action ${type}`);
          resolve(false);

        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
}
