'use strict';

import {
  createdBy,
  notes,
  updatedBy
} from '../context.js';

import {
  ADDRESS_CREATE,
  ADDRESS_FIND,
  ADDRESS_FIND_BY_ID,
  ADDRESS_UPDATE
} from '../constants';

export const addressQueries = {
  addressFindAll (_, args, context) {
    const fn = ({ args, context }) => context.connectors.address.findAll({ args, ...context });
    return canAccess ({ type: ADDRESS_FIND_ALL, locals: context.locals})({
      args, context, fn
    });
  },

  addressFindById (_, args, { connectors, ...context }) {
    const fn = ({ args, context }) => context.connectors.address.findById({ args, ...context });
    return canAccess ({ type: ADDRESS_FIND_BY_ID, locals: context.locals})({
      args, context, fn
    });
  }
};


export const addressMutaions = {
  addressCreate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.address.create({ args, ...context });
    return canAccess ({ type: ADDRESS_CREATE, locals: context.locals})({
      args, context, fn
    });
  },

  addressUpdate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.address.update({ args, ...context });
    return canAccess ({ type: ADDRESS_UPDATE, locals: context.locals})({
      args, context, fn
    });
  }
};


export const Address = {
  createdBy (query, args, context) {
    return createdBy(query, connectors.user);
  },

  notes (query, args, context) {
    return notes(query, connectors.note);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, connectors.user);
  }
};
