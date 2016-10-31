'use strict';

import isSchema from 'is-schema-valid';

const ref = {
  id: 'string'
};


export const address = {
  id        : 'string',
  address1  : { type: 'string', required: true },
  address2  : 'string',
  city      :  { type: 'string', required: true },
  country   :  { type: 'string', required: true },
  created   : 'string',
  createdBy : ref,
  current   : 'boolean',
  notes     : [ref],
  postCode  :  { type: 'string', required: true },
  rooms     : 'string',
  state     : 'string',
  status    : 'string',
  updated   : 'string',
  updatedBy : ref
};

export default isSchema(address);
