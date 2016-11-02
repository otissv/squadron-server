'use strict';

import { promise } from '../../../../../squadron-utils';
import {
  addresses,
  createdBy,
  notes,
  updatedBy
} from '../v01-server-context.js';
import {
  USER_CREATE,
  USER_FIND_BY_ID,
  USER_FIND_BY_USERNAME,
  USER_FIND_ID_BY_USERNAME,
  USER_FIND_ALL,
  USER_REMOVE,
  USER_UPDATE
} from '../v01-server-constants';
import canAccess from '../v01-server-canAccess';


export const eventQueries = {
  eventFindAll (_, args, context) {
    const fn = ({ args, context }) => context.connectors.event.findAll({ args, ...context });
    return canAccess({ type: USER_FIND_ALL, locals: context.locals})({
      args, context, fn
    });
  },

  eventFindById (_, args, context) {
    const fn = ({ args, context }) => context.connectors.event.findById({ args, ...context });
    return canAccess({ type: USER_FIND_BY_ID, locals: context.locals})({
      args, context, fn
    });
  },

  eventFindByEventname (_, args, context) {
    const fn = ({ args, context }) =>  context.connectors.event.findByEventname({ args, ...context });
    return canAccess({ type: USER_FIND_BY_USERNAME, locals: context.locals})({
      args, context, fn
    });
  },

  eventFindIdByEventname(_, args, context) {
    const fn = ({ args, context }) =>  context.connectors.event.findIdByEventname({ args, ...context });
    return canAccess({ type: USER_FIND_ID_BY_USERNAME, locals: context.locals})({
      args, context, fn
    });
  }
};


export const eventMutations = {
  eventCreate (_, args, context) {
    return context.connectors.event.create({ args, ...context });
    return canAccess({ type: USER_CREATE, locals: context.locals})({
      args, context, fn
    });
  },

  eventUpdate (_, args, context) {
    return context.connectors.event.update({ args, ...context });
    return canAccess({ type: USER_UPDATE, locals: context.locals})({
      args, context, fn
    });
  },

  eventRemove (_, args, context) {
    return context.connectors.event.remove({ args, ...context });
    return canAccess({ type: USER_REMOVE, locals: context.locals})({
      args, context, fn
    });
  }
};


export const Event = {
  addresses (query, args, context) {
    return addresses(query, connectors.address);
  },

  createdBy (query, args, context) {
    return createdBy(query, connectors.event);
  },

  notes (query, args, context) {
    return notes(query, connectors.note);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, connectors.event);
  }
};
