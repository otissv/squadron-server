/*
* Application middleware
 */

'use strcit';

import shuttingDown from '../middleware/middleware-shuttingDown';
import logger from '../middleware/middleware-logger';
import body from '../middleware/middleware-body';
import staticFiles from '../middleware/middleware-staticFiles';
// import session from '../backend/middleware/middleware-session';
import security from '../middleware/middleware-security';


export default function middleware (app, express) {
  shuttingDown(app);
  logger(app);
  body(app);
  staticFiles(app, express);
  // session(app, mongodb.instance());
  security(app);
};
