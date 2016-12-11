'use strict';

import {
  createdBy,
  updatedBy
} from '../server-context.js';
import {
  NOTE_CREATE,
  NOTE_FIND_ALL,
  NOTE_FIND_BY_ID,
  NOTE_UPDATE,
  NOTE_REMOVE
} from '../server-constants';
import canAccess from '../server-canAccess';


export const noteQueries = {
  noteFindAll (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.findAll({ args, ...context });
    return canAccess({ type: NOTE_FIND_ALL, locals: context.locals })({
      args, context, fn
    });
  },

  noteFindById (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.findById({ args, ...context });
    return canAccess({ type: NOTE_FIND_BY_ID, locals: context.locals })({
      args, context, fn
    });
  }
};


export const noteMutations = {
  noteCreate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.create({ args, ...context });
    return canAccess({ type: NOTE_CREATE, locals: context.locals })({
      args, context, fn
    });
  },

  noteUpdate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.update({ args, ...context });
    return canAccess({ type: NOTE_UPDATE, locals: context.locals })({
      args, context, fn
    });
  },

  noteRemove (_, args, context) {
    const fn = ({ args, context }) => context.connectors.note.remove({ args, ...context });
    return canAccess({ type: NOTE_REMOVE, locals: context.locals })({
      args, context, fn
    });
  }
};


export const Note = {
  createdBy (query, args, context) {
    return createdBy({ query, context });
  },

  updatedBy (query, args, context) {
    return updatedBy({ query, context });
  }
};
