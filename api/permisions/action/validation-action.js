'use strict';

import isSchema from 'is-schema-valid';

export const action = {
  key   : 'string',
  roles : ['string']
};

export default isSchema(action);
