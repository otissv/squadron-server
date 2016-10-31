'use strict';

import isSchema from 'is-schema-valid';

const ref = {
  id: 'string'
};

export const user = {
  id         : 'string',
  addresses  : [ref],
  created    : 'string',
  createdBy  : ref,
  dateOfBirth: 'string',
  email      : 'string',
  firstName  : 'string',
  lastLogin  : 'string',
  lastName   : 'string',
  notes      : [ref],
  telephone  : 'string',
  updated    : 'string',
  updatedBy  : ref,
  username   : 'string'
};

export default isSchema(user);
