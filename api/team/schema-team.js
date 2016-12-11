'use strict';

export default `
type Team {
  id         : String
  name       : String,
  description: String,
  manger     : String,
  created    : String,
  createdBy  : User
  updated    : String,
  updatedBy  : User
  notes      : [Note]
}`;


export const teamQueries = `
  teamFindAll(id: String): [Team]
  teamFindById(id: String): Team
  teamFindByName(name: String): Team
`;


export const teamMutations = `
  teamCreate(
    id         : String
    description: String,
    name       : String,
    manger     : String
  ): Team
  teamUpdate(
    id         : String
    description: String,
    name       : String,
    manger     : String
  ): Team
  teamRemove(
    id         : String
  ): Team
`;
