'use strict';

import { find, findById } from '../../../../squadron-utils';

export const notesMock = [
  {
    created  : 'Tue Jan 19 2016 07:34:10 GMT+0100 (CET)',
    createdBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' },
    flag     : false,
    id       : '0a912f8a-06bf-4f28-8c95-b36ebfe75886',
    note     : 'This is note 2',
    updated  : 'Sun Jul 31 2016 11:58:19 GMT+0200 (CEST)',
    updatedBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' }
  },
  {
    created  : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
    createdBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' },
    flag     : true,
    id       : '4e12d9e5-a86a-4c9e-8343-9edd342f9441',
    note     : 'This is note 1',
    updated: 'Sun Jul 31 2016 19:28:24 GMT+0200 (CEST)',
    updatedBy: { id: '051e4c84-af48-4372-82b9-432879d115a3' }
  }
];

export default class NoteMock {
  find (query) { return find(query, notesMock); }
  findById (query) { return findById(query, notesMock); }
}
