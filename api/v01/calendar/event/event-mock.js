'use strict';

import { find, findById, findByField } from '../../../../../squadron-utils';


export const eventsMock = [
  {
    id        : '57cc3a90670bed7f5d767ed9',
    address    : { id: '57509b5f350a10fb44e4c2b5' },
    allDay     : true,
    category   : { id : '57cc372e281460494aab451b'},
    created    : 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    createdBy  : { id: '563fb531007093486f3052ac' },
    description: 'Doloremque adipisci veniam et reprehenderit. Quaerat provident ullam. Qui quas itaque doloribus quis iste saepe quasi sit. A tempora in nihil sint distinctio. Adipisci cumque deleniti et illum. Ut magni minus impedit.',
    end        : 'Sun Sep 04 2016 16:00:00 GMT+0200 (CEST)',
    instructors: [{ id: '563fa9dd007093486f3052a5' }, { id: '563fb531007093486f3052ac' }],
    notes      : [{ id: '563fa9dd007093486f3052n2' }],
    level      : 'beginer',
    start      : 'Sun Sep 04 2016 10:00:00 GMT+0200 (CEST)',
    title      : 'Awseome event',
    updated    : 'Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)',
    updatedBy  : { id: '563fb531007093486f3052ac' }
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
