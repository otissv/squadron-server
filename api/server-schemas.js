'use strict';

import action, {
  actionMutations,
  actionQueries
} from './permisions/action/schema-action';
import address, {
  addressMutations,
  addressQueries
} from './address/schema-address';
import fiscalYear, {
  fiscalYearMutations,
  fiscalYearQueries
} from './fiscalYear/schema-fiscalYear';
import note, {
  noteMutations,
  noteQueries
} from './note/schema-note';
import role, {
  roleQueries,
  roleMutations
} from './permisions/role/schema-role';
import team, {
  teamMutations,
  teamQueries
} from './team/schema-team';
import user, {
  userMutations,
  userQueries
} from './user/schema-user';


const typeDefinitions = `
type Query {
  ${actionQueries}
  ${addressQueries}
  ${fiscalYearQueries}
  ${noteQueries}
  ${roleQueries}
  ${teamQueries}
  ${userQueries}
}

type Mutation {
  ${actionMutations}
  ${addressMutations}
  ${fiscalYearMutations}
  ${noteMutations}
  ${roleMutations}
  ${teamMutations}
  ${userMutations}
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
  fiscalYear,
  note,
  role,
  team,
  user
];
