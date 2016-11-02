/*
* Appplication secruity
*/

'use strict';

import helmet from 'helmet';
import cors from 'cors';


export default function security (app) {

  app.disable('x-powered-by');

  // CORS
  const whitelist = [...app.locals.cors];

  const corsOptions = {
    origin: function (origin, callback) {
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
    }
  };

  app.use(cors(corsOptions));

  // pre-flight
  app.options('*', cors(corsOptions));


  // Content Security Policy
  if (app.get('env' !== 'development')) {
    app.use(helmet.csp({
      defaultSrc: ['self'],
      scriptSrc: ['*.google-analytics.com'],
      styleSrc: ['unsafe-inline'],
      imgSrc: ['*.google-analytics.com'],
      connectSrc: ['none'],
      fontSrc: [],
      objectSrc: [],
      mediaSrc: [],
      frameSrc: []
    }));
  }


  app.use(helmet.xssFilter());
  app.use(helmet.frameguard());
  app.use(helmet.hsts({
    maxAge: 7776000000,
    includeSubdomains: true
  }));
  app.use(helmet.noSniff());
  app.use(helmet.ieNoOpen());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.dnsPrefetchControl());
  // app.use(require('express-enforces-ssl'));
  // app.use(helmet.hpkp({
  //   maxAge: ninetyDaysInMilliseconds,
  //   sha256s: ['AbCdEf123=', 'ZyXwVu456='],
  //   includeSubdomains: true,         // optional
  //   reportUri: 'http://example.com'  // optional
  //   reportOnly: false,               // optional
  //
  //   // Set the header based on a condition.
  //   // This is optional.
  //   setIf: function (req, res) {
  //     return req.secure
  //   }
  // }))
};
