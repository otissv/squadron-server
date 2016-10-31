'use strict';

export default `
type User {
  id         : String,
  addresses  : [Address],
  created    : String,
  createdBy  : User,
  dateOfBirth: String,
  email      : String,
  firstName  : String,
  lastLogin  : String,
  lastName   : String,
  notes      : [Note],
  telephone  : String,
  updated    : String,
  updatedBy  : User,
  username   : String
}`;


export const userQueries = `
  userFindAll(id: String, username: String): [User]
  userFindById(id: String): User
  userFindByUsername(username: String): User
  userFindIdByUsername(username: String): User
`;


export const userMutaions = `
  userCreate(
    id         : String,
    dateOfBirth: String,
    email      : String,
    firstName  : String,
    lastLogin  : String,
    lastName   : String,
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
    telephone  : String,
    username   : String
  ): User
  userRemove(
    id         : String
  ): User
`;
