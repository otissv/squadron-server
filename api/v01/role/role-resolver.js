'use strict';

import {
  addresses,
  createdBy,
  notes,
  updatedBy
} from '../context.js';


export const roleQueries = {
  roleFindAll (_, args, context) {
    return context.connectors.role.findAll({ args, ...context });
  },

  roleFindById (_, args, context) {
    return context.connectors.role.findById({ args, ...context });
  },

  roleFindByType (_, args, context) {
    return context.connectors.role.findByType({ args, ...context });
  },
};


export const roleMutations = {
  roleCreate (_, args, context) {
    return context.connectors.role.create({ args, ...context });
  },

  roleUpdate (_, args, context) {
    return context.connectors.role.update({ args, ...context });
  },

  roleRemove (_, args, context) {
    return context.connectors.role.remove({ args, ...context });
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
