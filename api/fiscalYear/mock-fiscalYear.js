'use strict';

import { find, findById } from '../../../squadron-utils';

export const fiscalYearsMock = [
  {
    id         : 'fiscalYear-0',
    active     : true,
    created    : 'Tue Jan 19 2016 07:34:10 GMT+0100 (CET)',
    createdBy  : { id: 'user-0' },
    description: 'This is fiscal year 0',
    notes      : [{ id: 'note-0' }],
    start      : 'Fri Apr 01 2015 00:00:00 GMT+0200 (CEST)',
    end         : 'Thu Mar 31 2016 23:59:00 GMT+0200 (CEST)',
    updated    : 'Sun Jul 31 2016 11:58:19 GMT+0200 (CEST)',
    updatedBy  : { id: 'user-0' }
  },
  {
    id         : 'fiscalYear-1',
    created    : 'Wed May 11 2016 01:29:39 GMT+0200 (CEST)',
    createdBy  : { id: 'user-0' },
    description: 'This is fiscal year 0',
    notes      : [{ id: 'note-0' }],
    end       : 'Thu Mar 31 2016 23:59:00 GMT+0200 (CEST)',
    start     : 'Fri Apr 01 2017 00:00:00 GMT+0200 (CEST)',
    updated    : 'Sun Jul 31 2016 19:28:24 GMT+0200 (CEST)',
    updatedBy  : { id: 'user-0' }
  }
];

export default class FiscalYearMock {
  find (query) { return find(query, fiscalYearsMock); }
  findById (query) { return findById(query, fiscalYearsMock); }
}
