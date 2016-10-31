'use strict';

import {
  createdBy,
  updatedBy
} from '../context.js';


export const noteQueries = {
  noteFindAll (_, args, context) {
    return context.connectors.note.findAll({ args, ...context });
  },

  noteFindById (_, args, context) {
    return context.connectors.note.findById({ args, ...context });
  }
};


export const noteMutaions = {
  noteCreate (_, args, context) {
    return context.connectors.note.create({ args, ...context });
  },

  noteUpdate (_, args, context) {
    return context.connectors.note.update({ args, ...context });
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
