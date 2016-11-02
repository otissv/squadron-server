'use strict';

import {
  addresses,
  createdBy,
  notes,
  updatedBy
} from '../../v01-server-context.js';
import {
  ROLE_CREATE,
  ROLE_FIND_ALL,
  ROLE_FIND_BY_ID,
  ROLE_FIND_BY_TYPE,
  ROLE_UPDATE
} from '../../v01-server-constants';
import canAccess from '../../v01-server-canAccess';


export const roleQueries = {
  roleFindAll (_, args, context) {
    const fn = ({ args, context }) => context.connectors.role.findAll({ args, ...context });
    return canAccess ({ type: ROLE_FIND_ALL, locals: context.locals})({
      args, context, fn
    });
  },

  ROLE_FIND_BY_ID (_, args, context) {
    const fn = ({ args, context }) => context.connectors.role.findById({ args, ...context });
    return canAccess ({ type: ADDRESS_FIND_ALL, locals: context.locals})({
      args, context, fn
    });
  },

  roleFindByType (_, args, context) {
    const fn = ({ args, context }) => context.connectors.role.findByType({ args, ...context });
    return canAccess ({ type: ROLE_FIND_BY_TYPE, locals: context.locals})({
      args, context, fn
    });
  },
};


export const roleMutations = {
  roleCreate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.role.create({ args, ...context });
    return canAccess ({ type: ROLE_CREATE, locals: context.locals})({
      args, context, fn
    });
  },

  roleUpdate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.role.update({ args, ...context });
    return canAccess ({ type: ROLE_UPDATE, locals: context.locals})({
      args, context, fn
    });
  },

  roleRemove (_, args, context) {
    const fn = ({ args, context }) => context.connectors.role.remove({ args, ...context });
    return canAccess ({ type: ROLE_REMOVE, locals: context.locals})({
      args, context, fn
    });
  }
};


export const Role = {
  createdBy (query, args, context) {
    return createdBy(query, connectors.role);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, connectors.role);
  }
};
