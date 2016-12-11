/*
* Application routes
*/

'use strict';
import serverRoutes from '../api/server-routes';

export default function routes (app, context) {
  app.route('/').get((req, res) => {
    return res.status(403).send('403 Forbidden');
  });

  serverRoutes(app, context);
}
