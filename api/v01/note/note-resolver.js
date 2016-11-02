'use strict';

import {
  createdBy,
  updatedBy
} from '../v01-server-context.js';
import {
  NOTE_CREATE,
  NOTE_FIND_ALL,
  NOTE_FIND_BY_ID,
  NOTE_UPDATE,
  NOTE_REMOVE
} from '../v01-server-constants';
import canAccess from '../v01-server-canAccess';


export const noteQueries = {
  noteFindAll (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.findAll({ args, ...context });
    return canAccess ({ type: NOTE_FIND_ALL, locals: context.locals})({
      args, context, fn
    });
  },

  noteFindById (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.findById({ args, ...context });
    return canAccess ({ type: NOTE_FIND_BY_ID, locals: context.locals})({
      args, context, fn
    });
  }
};


export const noteMutaions = {
  noteCreate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.create({ args, ...context });
    return canAccess ({ type: NOTE_CREATE, locals: context.locals})({
      args, context, fn
    });
  },

  noteUpdate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.update({ args, ...context });
    return canAccess ({ type: NOTE_UPDATE, locals: context.locals})({
      args, context, fn
    });
  },

  noteRemove (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.remove({ args, ...context });
    return canAccess ({ type: NOTE_UPDATE, locals: context.locals})({
      args, context, fn
    });
  }
};


export const Note = {
  createdBy (query, args, context) {
    return createdBy(query, connectors.user);
  },

  updatedBy (query, args, context) {
    return updatedBy(query, connectors.user);
  }
};
