'use strict';

import {
  addresses,
  createdBy,
  notes,
  updatedBy
} from '../server-context';

import {
  USER_CREATE,
  USER_FIND_BY_ID,
  USER_FIND_BY_USERNAME,
  USER_FIND_ID_BY_USERNAME,
  USER_FIND_ALL,
  USER_REMOVE,
  USER_UPDATE
} from '../server-constants';
import canAccess from '../server-canAccess';


export const userQueries = {
  userFindAll (_, args, context) {
    const fn = ({ args, context }) => context.connectors.user.findAll({ args, ...context });
    return canAccess({ type: USER_FIND_ALL, locals: context.locals })({
      args, context, fn
    });
  },

  userFindById (_, args, context) {
    const fn = ({ args, context }) => context.connectors.user.findById({ args, ...context });
    return canAccess({ type: USER_FIND_BY_ID, locals: context.locals })({
      args, context, fn
    });
  },

  userFindByUsername (_, args, context) {
    const fn = ({ args, context }) => context.connectors.user.findByUsername({ args, ...context });
    return canAccess({ type: USER_FIND_BY_USERNAME, locals: context.locals })({
      args, context, fn
    });
  },

  userFindIdByUsername (_, args, context) {
    const fn = ({ args, context }) => context.connectors.user.findIdByUsername({ args, ...context });
    return canAccess({ type: USER_FIND_ID_BY_USERNAME, locals: context.locals })({
      args, context, fn
    });
  }
};


export const userMutations = {
  userCreate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.user.create({ args, ...context });
    return canAccess({ type: USER_CREATE, locals: context.locals })({
      args, context, fn
    });
  },

  userUpdate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.user.update({ args, ...context });
    return canAccess({ type: USER_UPDATE, locals: context.locals })({
      args, context, fn
    });
  },

  userRemove (_, args, context) {
    const fn = ({ args, context }) => context.connectors.user.remove({ args, ...context });
    return canAccess({ type: USER_REMOVE, locals: context.locals })({
      args, context, fn
    });
  }
};


export const User = {
  addresses (query, args, context) {
    return addresses({ query, context });
  },

  createdBy (query, args, context) {
    return createdBy({ query, context });
  },

  notes (query, args, context) {
    return notes({ query, context });
  },

  updatedBy (query, args, context) {
    return updatedBy({ query, context });
  }
};
