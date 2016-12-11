'use strict';

export function addresses ({ query, context }) {
  return context.connectors.address.findById({ args: query.addresses, ...context });
}

export function codependents ({ query, context }) {
  return context.connectors.user.findById({ args: query.codependents, ...context });
}

export function address ({ query, context }) {
  return context.findById({ query: query.address });
}

export function fiscalYear ({ query, context }) {
  return context.connectors.fiscalYear.findById({ args: query.fiscalYear, ...context });
}

export function createdBy ({ query, context }) {
  return context.connectors.user.findById({ args: query.createdBy, ...context });
}

export function notes ({ query, context }) {
  return context.connectors.note.findById({ args: query.notes, ...context });
}

export function team ({ query, context }) {
  return context.connectors.team.findById({ args: query.team, ...context });
}

export function updatedBy ({ query, context }) {
  return context.connectors.user.findById({ args: query.updatedBy, ...context });
}

export function user ({ query, context }) {
  return context.connectors.user.findById({ args: query.user, ...context });
}
