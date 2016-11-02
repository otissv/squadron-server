'use strict';

export default `
type Event {
  id 	       : String,
  address    : Address,
  allDay     : Boolean,
  category   : EventCategory,
  created    : String,
  createdBy  : User,
  description: String,
  end        : String,
  invited    : String,
  instructors: [User],
  notes      : [Note],
  level      : String,
  start      : String,
  title      : String,
  updated    : String,
  updatedBy  : User
}`;


export const eventQueries = `
  eventFindAll(id: String, eventname: String): [Event]
  eventFindById(id: String): Event
  eventFindByEventname(eventname: String): Event
  eventFindIdByEventname(eventname: String): Event
`;


export const eventMutaions = `
  eventCreate(
    id         : String,
    dateOfBirth: String,
    email      : String,
    firstName  : String,
    lastLogin  : String,
    lastName   : String,
    telephone  : String,
    eventname   : String
  ): Event
  eventUpdate(
    id         : String,
    dateOfBirth: String,
    email      : String,
    firstName  : String,
    lastLogin  : String,
    lastName   : String,
    telephone  : String,
    eventname   : String
  ): Event
  eventRemove(
    id         : String
  ): Event
`;
