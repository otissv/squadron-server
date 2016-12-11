'use strict';

import isSchema from 'is-schema-valid';

const ref = {
  id: 'string'
};

export const team = {
  id         : 'string',
  addresses  : [ref],
  name       : ref,
  created    : 'string',
  createdBy  : ref,
  description: 'string',
  notes      : [ref],
  owner      : ref,
  updated    : 'string',
  updatedBy  : ref,
  teams      : ['string']
};

export default isSchema(team);
