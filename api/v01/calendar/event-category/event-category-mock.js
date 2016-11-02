'use strict';

import { find, findById, findByField } from '../../../../../squadron-utils';


export const eventsMock = [
  {
    id: '051e4c84-af48-4372-82b9-432879d115a3',
    addresses:[
      { id: '0e2d6d68-4763-4c9f-bb16-290e472f9242' }
    ],
    created: 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    createdBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' },
    dateOfBirth: 'Thu Apr 14 2016 08:17:38 GMT+0200 (CEST)',
    email: 'Blanca_Gusikowski@hotmail.com',
    firstName: 'aina',
    lastLogin: 'Sun Jul 31 2016 02:04:13 GMT+0200 (CEST)',
    lastName: 'zeyler',
    notes:[
      { id: '0a912f8a-06bf-4f28-8c95-b36ebfe75886' },
       { id: '4e12d9e5-a86a-4c9e-8343-9edd342f9441' }
    ],
    telephone: '593-275-5288 x7369',
    updated: 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    updatedBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' },
    eventname: 'ania'
  },
  {
    id: 'c362f0ad-2114-40bc-aa71-a22f855db085',
    addresses: [
      { id: '1bbfb73a-fff2-4df2-926a-4194b4739400' },
      { id: '0e2d6d68-4763-4c9f-bb16-290e472f9242' }
    ],
    created: 'Tue Sep 15 2015 19:47:25 GMT+0200 (CEST)',
    createdBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' },
    dateOfBirth: 'Mon Jun 13 2016 10:08:34 GMT+0200 (CEST)',
    email: 'Doug31@yahoo.com',
    firstName: 'otis',
    lastLogin: 'Sat Jul 30 2016 14:21:43 GMT+0200 (CEST)',
    lastName: 'virginie',
    notes: [
      { id: '0a912f8a-06bf-4f28-8c95-b36ebfe75886' },
      { id: '4e12d9e5-a86a-4c9e-8343-9edd342f9441' }
    ],
    telephone: '535.224.8103',
    updated: 'Sat Jul 30 2016 17:54:42 GMT+0200 (CEST)',
    updatedBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' },
    eventname: 'otis'
  }
];


export default class UserMock {
  find (query) {
    return find({
      query,
      mock: eventsMock,
    });
  }

  findById (query) {
    return findById({
      query,
      mock: eventsMock,
    });
  }

  findByUsername (query) {
    return findByField({
      query,
      mock: eventsMock,
      field: 'eventname'
    });
  }
}
