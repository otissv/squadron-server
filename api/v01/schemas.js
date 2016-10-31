'use strict';

import action, {
  actionMutations,
  actionQueries
} from './action/action-schema';
import address, {
  addressMutaions,
  addressQueries
} from './address/address-schema';
import note, {
  noteMutaions,
  noteQueries
} from './note/note-schema';
import role, {
  roleQueries,
  roleMutations
} from './role/role-schema';
import user, {
  userMutaions,
  userQueries
} from './user/user-schema';


const typeDefinitions = `
type Query {
  ${actionQueries}
  ${addressQueries}
  ${noteQueries}
  ${roleQueries}
  ${userQueries}
}

type Mutation {
  ${actionMutations}
  ${addressMutaions}
  ${noteMutaions}
  ${roleMutations}
  ${userMutaions}
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default [
  typeDefinitions,
  action,
  address,
  note,
  role,
  user
];
