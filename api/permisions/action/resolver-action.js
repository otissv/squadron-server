'use strict';
import canAccess from '../../server-canAccess';


export const actionQueries = {
  actionFindAll (_, args, context) {
    return context.connectors.action.findAll({ args, ...context });
  },

  actionHas (_, args, context) {
    return context.connectors.action.has({ args, ...context });
  }
};


export const actionMutations = {
  actionAdd (_, args, context) {
    return context.connectors.action.add({ args, ...context });
  },

  actionUpdate (_, args, context) {
    return context.connectors.action.update({ args, ...context });
  },

  actionRemove (_, args, context) {
    return context.connectors.action.remove({ args, ...context });
  }
};
