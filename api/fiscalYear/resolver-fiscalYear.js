'use strict';

import {
  createdBy,
  notes,
  updatedBy,
} from '../server-context.js';
import {
  FISCAL_YEAR_CREATE,
  FISCAL_YEAR_FIND_ALL,
  FISCAL_YEAR_FIND_BY_ID,
  FISCAL_YEAR_UPDATE,
  FISCAL_YEAR_REMOVE
} from '../server-constants';
import canAccess from '../server-canAccess';


export const fiscalYearQueries = {
  fiscalYearFindAll (_, args, context) {
    const fn = ({ args, context }) => context.connectors.fiscalYear.findAll({ args, ...context });
    return canAccess({ type: FISCAL_YEAR_FIND_ALL, locals: context.locals })({
      args, context, fn
    });
  },

  fiscalYearFindById (_, args, context) {
    const fn = ({ args, context }) => context.connectors.fiscalYear.findById({ args, ...context });
    return canAccess({ type: FISCAL_YEAR_FIND_BY_ID, locals: context.locals })({
      args, context, fn
    });
  }
};


export const fiscalYearMutations = {
  fiscalYearCreate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.fiscalYear.create({ args, ...context });
    return canAccess({ type: FISCAL_YEAR_CREATE, locals: context.locals })({
      args, context, fn
    });
  },

  fiscalYearUpdate (_, args, context) {
    const fn = ({ args, context }) => context.connectors.fiscalYear.update({ args, ...context });
    return canAccess({ type: FISCAL_YEAR_UPDATE, locals: context.locals })({
      args, context, fn
    });
  },

  fiscalYearRemove (_, args, context) {
    const fn = ({ args, context }) => context.connectors.fiscalYear.remove({ args, ...context });
    return canAccess({ type: FISCAL_YEAR_REMOVE, locals: context.locals })({
      args, context, fn
    });
  }
};


export const FiscalYear = {
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
