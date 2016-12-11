'use strict';

import isSchema from 'is-schema-valid';


const ref = {
  id: 'string'
};

export const fiscalYear = {
  created  : 'string',
  createdBy: ref,
  flag     : 'boolean',
  id       : 'string',
  note     : 'string',
  updated  : 'string',
  updatedBy: ref
};

export default isSchema(fiscalYear);
