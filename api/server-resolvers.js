'use strict';

import {
  actionMutations,
  actionQueries
} from './permisions/action/resolver-action';
import {
  Address,
  addressMutations,
  addressQueries
} from './address/resolver-address';
import {
  FiscalYear,
  fiscalYearMutations,
  fiscalYearQueries
} from './fiscalYear/resolver-fiscalYear';
import {
  Note,
  noteMutations,
  noteQueries
} from './note/resolver-note';
import {
  Role,
  roleQueries,
  roleMutations
} from './permisions/role/resolver-role';
import {
  Team,
  teamQueries,
  teamMutations
} from './team/resolver-team';
import {
  User,
  userMutations,
  userQueries
} from './user/resolver-user';


export default {
  Query: {
    ...actionQueries,
    ...addressQueries,
    ...fiscalYearQueries,
    ...noteQueries,
    ...roleQueries,
    ...teamQueries,
    ...userQueries
  },

  Mutation: {
    ...actionMutations,
    ...addressMutations,
    ...fiscalYearMutations,
    ...noteMutations,
    ...roleMutations,
    ...teamMutations,
    ...userMutations
  },

  Address,
  FiscalYear,
  Note,
  Role,
  Team,
  User
};
