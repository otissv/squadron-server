'use strict';

import isSchema from 'is-schema-valid';

const ref = {
  id: 'string'
};

export const event = {
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
  eventname   : 'string'
};

export default isSchema(event);
