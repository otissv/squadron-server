'use strict';

export default `
type Note {
  id        : String,
  created   : String,
  createdBy : User,
  flag      : Boolean,
  note      : String,
  updated   : String,
  updatedBy : User,
}
`;

export const noteQueries = `
  noteFindAll(id: [String]): [Note]
  noteFindById(id: String): Note
`;


export const noteMutations = `
  noteCreate(
    id        : String,
    created   : String,
    flag      : Boolean,
    note      : String,
    updated   : String
  ): Note
  noteUpdate(
    id        : String,
    created   : String,
    flag      : Boolean,
    note      : String,
    updated   : String
  ): Note
  noteRemove(
    id        : String
  ): Note
`;
