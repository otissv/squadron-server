'use strict';

import {
  createdBy,
  notes,
  updatedBy
} from '../server-context.js';
import {
  TEAM_CREATE,
  TEAM_FIND_BY_ID,
  TEAM_FIND_BY_NAME,
  TEAM_FIND_ALL,
  TEAM_REMOVE,
  TEAM_UPDATE
} from '../server-constants';
import canAccess from '../server-canAccess';


export const teamQueries = {
  teamFindAll (_, args, context) {
    const fn = ({ args, context }) => context.connectors.team.findAll({ args, ...context });
    return canAccess({ type: TEAM_FIND_ALL, locals: context.locals })({
      args, context, fn
    });
  },

  teamFindById (_, args, context) {
    const fn = ({ args, context }) => context.connectors.team.findById({ args, ...context });
    return canAccess({ type: TEAM_FIND_BY_ID, locals: context.locals })({
      args, context, fn
    });
  },

  teamFindByName (_, args, context) {
    const fn = ({ args, context }) => context.connectors.team.findByName({ args, ...context });
    return canAccess({ type: TEAM_FIND_BY_NAME, locals: context.locals })({
      args, context, fn
    });
  }
};


export const teamMutations = {
  teamCreate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.team.create({ args, ...context });
    return canAccess({ type: TEAM_CREATE, locals: context.locals })({
      args, context, fn
    });
  },

  teamUpdate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.team.update({ args, ...context });
    return canAccess({ type: TEAM_UPDATE, locals: context.locals })({
      args, context, fn
    });
  },

  teamRemove (_, args, context) {
    const fn = ({ args, context }) => context.connectors.team.remove({ args, ...context });
    return canAccess({ type: TEAM_REMOVE, locals: context.locals })({
      args, context, fn
    });
  }
};


export const Team = {
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
