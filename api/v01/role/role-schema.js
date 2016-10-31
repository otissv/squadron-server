'use strict';

export default `
type Role {
  id         : String,
  created    : String,
  createdBy  : User,
  description: String,
  type       : String,
  updated    : String,
  updatedBy  : User,
}`;


export const roleQueries = `
  roleFindAll(id: String, rolename: String): [Role]
  roleFindById(id: String): Role
  roleFindByType(type: String): Role
`;


export const roleMutations = `
  roleCreate(
    id         : String,
    created    : String,
    description: String,
    type       : String,
    updated    : String
  ): Role
  roleUpdate(
    id         : String,
    created    : String,
    description: String,
    type       : String,
    updated    : String
  ): Role
  roleRemove(
    id         : String
  ): Role
`;
