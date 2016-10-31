/*
* Application routes
*/

'use strict';
import v01Routes from '../api/v01/server-v01-routes';

export default function routes (app, context) {
  app.route('/').get((req, res) => {
    return res.status(403).send('403 Forbidden');
  });

  v01Routes(app, context);
}
