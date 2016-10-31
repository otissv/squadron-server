'use strict';

import databases from './databases';
import environment from './env/environment';
import middleware from './middleware/middleware-index';
import routes from './routes';


export default function (app, express) {
  environment(app);
  middleware(app, express);
  routes(app, {
    databases: {
      redis: databases.redis.connect(app.locals.redis)
    },
    locals: app.locals
  });
};
