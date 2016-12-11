'use strict';

import { find, findById } from '../../../squadron-utils';

export const notesMock = [
  {
    created  : 'Tue Jan 19 2016 07:34:10 GMT+0100 (CET)',
    createdBy: { id: 'user-0' },
    flag     : false,
    id       : 'note-0',
    note     : 'This is note 1',
    updated  : 'Sun Jul 31 2016 11:58:19 GMT+0200 (CEST)',
    updatedBy: { id: 'user-0' }
  },
  {
    created  : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
    createdBy: { id: 'user-0' },
    flag     : true,
    id       : 'note-1',
    note     : 'This is note 2',
    updated: 'Sun Jul 31 2016 19:28:24 GMT+0200 (CEST)',
    updatedBy: { id: 'user-0' }
  }
];

export default class NoteMock {
  find (query) { return find(query, notesMock); }
  findById (query) { return findById(query, notesMock); }
}
