'use strict';

import { find, findById } from '../../../../squadron-utils';


export const addressesMock = [
  {
    address1: '3843 Kody Parks',
    address2: 'Apt. 408',
    city: 'South Lauriane',
    country: 'Barbados',
    created: 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    createdBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' },
    current: null,
    id: '1bbfb73a-fff2-4df2-926a-4194b4739400',
    notes: [
      { id: '0a912f8a-06bf-4f28-8c95-b36ebfe75886' },
      { id: '4e12d9e5-a86a-4c9e-8343-9edd342f9441' }
    ],
    postCode: '91845',
    rooms: '202',
    state: 'Louisiana',
    status: 'active',
    updated: 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    updatedBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' }
  },
  {
    address1: '5529 Keira Shore',
    address2: 'Apt. 592',
    city:'Blandashire',
    country:  'Virgin Islands, British',
    created: 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    createdBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' },
    current: true,
    id: '0e2d6d68-4763-4c9f-bb16-290e472f9242',
    notes: [
      { id: '0a912f8a-06bf-4f28-8c95-b36ebfe75886' },
      { id: '4e12d9e5-a86a-4c9e-8343-9edd342f9441' }
    ],
    postCode: '81036-8340',
    rooms: '101',
    state: 'South Carolina',
    status: ' active',
    updated: 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    updatedBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' }
  }
];

export default class AddressMock {
  find (query) { return find(query, addressesMock); }
  findById (query) { return findById(query, addressesMock); }
}
