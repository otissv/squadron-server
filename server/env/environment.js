/*
* Application enviorments config
*/

'use strict';

import development from './development-env.js';
import production from './production-env.js';
import getEnv from 'get-env';

const ENV = getEnv();

export function env () {
  switch (ENV) {
    case 'dev':
      return development;
    case 'prod':
      return production;
    default:
      throw new Error('Unknow execption Enviorment:');
  }
};

export default function environment (app) {
  const config = env();
  /*
  *Application variables
  */
  app.set('baseURL', config.baseURL);
  app.set('shuttingDown', false);
  app.locals = {...app.locals, ...config};
};
