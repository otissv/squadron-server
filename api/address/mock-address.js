'use strict';

import { find, findById } from '../../../squadron-utils';


export const addressesMock = [
  {
    address1: '3843 Kody Parks',
    address2: 'Apt. 408',
    city: 'South Lauriane',
    country: 'Barbados',
    created: 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    createdBy: { id: 'user-0' },
    current: null,
    id: 'address-0',
    notes: [
      { id: 'note-0' },
      { id: 'note-1' }
    ],
    postCode: '91845',
    rooms: '202',
    state: 'Louisiana',
    status: 'active',
    updated: 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    updatedBy: { id: 'user-0' }
  },
  {
    address1: '5529 Keira Shore',
    address2: 'Apt. 592',
    city:'Blandashire',
    country:  'Virgin Islands, British',
    created: 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    createdBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' },
    current: true,
    id: 'address-1',
    notes: [
      { id: 'note-0' },
      { id: 'note-1' }
    ],
    postCode: '81036-8340',
    rooms: '101',
    state: 'South Carolina',
    status: ' active',
    updated: 'Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)',
    updatedBy: { id: 'user-0' }
  }
];

export default class AddressMock {
  find (query) { return find(query, addressesMock); }
  findById (query) { return findById(query, addressesMock); }
}
