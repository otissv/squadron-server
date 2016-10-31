'use strict';

import {
  actionMutations,
  actionQueries
} from './action/action-resolver';
import {
  Address,
  addressMutaions,
  addressQueries
} from './address/address-resolver';
import {
  Note,
  noteMutaions,
  noteQueries
} from './note/note-resolver';
import {
  Role,
  roleQueries,
  roleMutations
} from './role/role-resolver';
import {
  User,
  userMutations,
  userQueries
} from './user/user-resolver';


export default {
  Query: {
    ...actionQueries,
    ...addressQueries,
    ...noteQueries,
    ...roleQueries,
    ...userQueries
  },

  Mutation: {
    ...actionMutations,
    ...addressMutaions,
    ...noteMutaions,
    ...roleMutations,
    ...userMutations
  },

  Address,
  Note,
  Role,
  User
};
