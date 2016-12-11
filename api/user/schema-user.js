'use strict';

export default `
type User {
  addresses  : [Address],
  company    : String,
  created    : String,
  createdBy  : User,
  dateOfBirth: String,
  email      : String,
  firstName  : String,
  id         : String,
  lastLogin  : String,
  lastName   : String,
  notes      : [Note],
  online     : Boolean
  roles      : [String],
  telephone  : String,
  updated    : String,
  updatedBy  : User,
  username   : String,
}`;


export const userQueries = `
  userFindAll(id: String, username: String): [User]
  userFindById(id: String): User
  userFindByUsername(username: String): User
  userFindIdByUsername(username: String): User
`;


export const userMutations = `
  userCreate(
    id         : String,
    dateOfBirth: String,
    email      : String,
    firstName  : String,
    lastLogin  : String,
    lastName   : String,
    roles      : [String],
    telephone  : String,
    username   : String
  ): User
  userUpdate(
    id         : String,
    dateOfBirth: String,
    email      : String,
    firstName  : String,
    lastLogin  : String,
    lastName   : String,
    roles      : [String],
    telephone  : String,
    username   : String
  ): User
  userRemove(
    id         : String
  ): User
`;
