'use strict';

export default `
type Action {
  roles      : [String],
  type       : String
}`;


export const actionQueries = `
  actionFindAll(type: String): Action
  actionHas(type: String, role: String): Action
`;


export const actionMutations = `
  actionAdd(
    roles : [String],
    type  : String
  ): Action
  actionUpdate(
    roles  : [String],
    type  : String
  ): Action
  actionRemove(
    type  : String
  ): Action
`;
