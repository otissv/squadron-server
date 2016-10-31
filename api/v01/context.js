'use strict';

export function addresses (query, context) {
  return context.findById({ query: query.addresses });
}

export function createdBy (query, context) {
  return context.findById({ query: query.createdBy });
}

export function address (query, context) {
  return context.findById({ query: query.address });
}

export function notes (query, context) {
  return context.find(query.notes);
}

export function updatedBy (query, context) {
  return context.findById({ query: query.updatedBy });
}
