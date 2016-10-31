'use strict';

import isSchema from 'is-schema-valid';


const ref = {
  id: 'string'
};


export const role = {
  created    : 'string',
  createdBy  : ref,
  description: 'string',
  id         : 'string',
  type       : 'string',
  updated    : 'string',
  updatedBy  : ref
};

export default isSchema(role);
