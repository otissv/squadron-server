'use strict';

export default `
type Address {
  id        : String,
  address1  : String,
  address2  : String,
  city      : String,
  country   : String,
  created   : String,
  createdBy : User
  current   : Boolean,
  notes     : [Note],
  postCode  : String,
  rooms     : String,
  state     : String,
  status    : String,
  updated   : String,
  updatedBy : User
}
`;


export const addressQueries = `
  addressFindAll(id: [String]): [Address]
  addressFindById(id: String): Address
`;


export const addressMutations = `
  addressCreate(
    id        : String,
    address1  : String,
    address2  : String,
    city      : String,
    country   : String,
    created   : String,
    current   : Boolean,
    postCode  : String,
    rooms     : String,
    state     : String,
    status    : String,
    updated   : String,
  ): Address
  addressUpdate(
    id        : String,
    address1  : String,
    address2  : String,
    city      : String,
    country   : String,
    created   : String,
    current   : Boolean,
    postCode  : String,
    rooms     : String,
    state     : String,
    status    : String,
    updated   : String,
  ): Address
  addressRemove(
    id        : String
  ): Address
`;
