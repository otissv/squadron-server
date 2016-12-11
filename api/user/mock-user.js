'use strict';

import { find, findById, findByField } from '../../../squadron-utils';


export const usersMock = [
  {
    id: 'user-0',
    addresses: [ 'address-1', 'address-2' ],
    dateOfBirth: '2016-02-13T07:35:49.788Z',
    email: 'Vince.Boyle@hotmail.com',
    firstName: 'Jonathan',
    lastName: 'Marquardt',
    lastLogin: 'Sun Dec 04 2016 21:52:20 GMT+0100 (CET)',
    notes: [ 'note-1', 'note-2' ],
    online: true,
    roles: [ 'manager' ],
    skype: 'skype Name',
    team: { id: 'team-5', title: 'McGlynn - Hilll' },
    telephone: '197-341-9299 x224',
    createdBy: 'Sat Jun 11 2016 12:54:28 GMT+0200 (CEST)',
    created: { id: 'user-0' },
    updated: { id: 'user-0' },
    updatedBy: 'Sun Dec 04 2016 18:04:24 GMT+0100 (CET)',
    username: 'user-0'
  },
  {
    id: 'user-1',
    addresses: [ 'address-1', 'address-2' ],
    dateOfBirth: '2016-01-06T17:40:57.278Z',
    email: 'Anna46@yahoo.com',
    firstName: 'Leilani',
    lastName: 'Bradtke',
    lastLogin: 'Mon Dec 05 2016 07:42:34 GMT+0100 (CET)',
    lineManager: { id: 'user-0 ' },
    notes: [ 'note-1', 'note-2' ],
    roles: [ 'user' ],
    skype: 'skype Name',
    team: { id: 'team-8', title: 'Flatley LLC' },
    telephone: '(365) 559-6725 x00383',
    createdBy: 'Fri Apr 22 2016 10:22:07 GMT+0200 (CEST)',
    created: { id: 'user-0' },
    updated: { id: 'user-0' },
    updatedBy: 'Mon Dec 05 2016 05:44:30 GMT+0100 (CET)',
    username: 'user-1'
  },
  {
    id: 'user-2',
    addresses: [ 'address-1', 'address-2' ],
    dateOfBirth: '2016-04-03T09:43:50.521Z',
    email: 'Francesca_Botsford74@gmail.com',
    firstName: 'Victoria',
    lastName: 'Kutch',
    lastLogin: 'Sun Dec 04 2016 21:55:31 GMT+0100 (CET)',
    lineManager: { id: 'user-0 ' },
    notes: [ 'note-1', 'note-2' ],
    roles: [ 'admin', 'user' ],
    skype: 'skype Name',
    team: { id: 'team-0', title: 'Toy and Sons' },
    telephone: '269-343-5174',
    createdBy: 'Sat Jun 11 2016 05:42:04 GMT+0200 (CEST)',
    created: { id: 'user-0' },
    updated: { id: 'user-0' },
    updatedBy: 'Mon Dec 05 2016 16:33:16 GMT+0100 (CET)',
    username: 'user-2'
  },
  {
    id: 'user-3',
    addresses: [ 'address-1', 'address-2' ],
    dateOfBirth: '2016-02-08T22:03:06.754Z',
    email: 'Magdalen73@hotmail.com',
    firstName: 'Halie',
    lastName: 'Koch',
    lastLogin: 'Mon Dec 05 2016 15:51:13 GMT+0100 (CET)',
    notes: [ 'note-1', 'note-2' ],
    roles: [ 'user' ],
    skype: 'skype Name',
    team: { id: 'team-9', title: 'Dickinson Inc' },
    telephone: '(411) 975-5768 x20054',
    createdBy: 'Tue Nov 29 2016 19:43:01 GMT+0100 (CET)',
    created: { id: 'user-0' },
    updated: { id: 'user-0' },
    updatedBy: 'Mon Dec 05 2016 10:15:06 GMT+0100 (CET)',
    username: 'user-3'
  },
  {
    id: 'user-4',
    addresses: [ 'address-1', 'address-2' ],
    dateOfBirth: '2016-11-07T08:01:44.999Z',
    email: 'Kenya.Hilpert76@hotmail.com',
    firstName: 'Flo',
    lastName: 'Goyette',
    lastLogin: 'Mon Dec 05 2016 12:01:18 GMT+0100 (CET)',
    lineManager: { id: 'user-3 ' },
    notes: [ 'note-1', 'note-2' ],
    online: true,
    roles: [ 'manager' ],
    skype: 'skype Name',
    team: { id: 'team-5', title: 'McGlynn - Hilll' },
    telephone: '(400) 834-9877',
    createdBy: 'Thu Jan 14 2016 20:27:44 GMT+0100 (CET)',
    created: { id: 'user-0' },
    updated: { id: 'user-0' },
    updatedBy: 'Mon Dec 05 2016 16:50:32 GMT+0100 (CET)',
    username: 'user-4'
  },
  {
    id: 'user-5',
    addresses: [ 'address-1', 'address-2' ],
    dateOfBirth: '2016-05-13T05:13:28.438Z',
    email: 'Dameon_Dach29@yahoo.com',
    firstName: 'Javier',
    lastName: 'Steuber',
    lastLogin: 'Mon Dec 05 2016 10:56:57 GMT+0100 (CET)',
    lineManager: { id: 'user-3 ' },
    notes: [ 'note-1', 'note-2' ],
    online: true,
    roles: [ 'admin' ],
    skype: 'skype Name',
    team: { id: 'team-6', title: 'Altenwerth - Balistreri' },
    telephone: '100-270-3642 x92843',
    createdBy: 'Tue Oct 18 2016 04:32:44 GMT+0200 (CEST)',
    created: { id: 'user-0' },
    updated: { id: 'user-0' },
    updatedBy: 'Mon Dec 05 2016 05:58:03 GMT+0100 (CET)',
    username: 'user-5'
  }
];


export default class UserMock {
  find (query) {
    return find({
      query,
      mock: usersMock
    });
  }

  findById (query) {
    return findById({
      query,
      mock: usersMock
    });
  }

  findByUsername (query) {
    return findByField({
      query,
      mock: usersMock,
      field: 'username'
    });
  }
}
