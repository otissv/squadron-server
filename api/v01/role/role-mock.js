'use strict';

import { find, findById, findByField } from '../../../../squadron-utils';


export const rolesMock = [
  {
    "created":  "Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)",
    "createdBy": {
      "id":  "051e4c84-af48-4372-82b9-432879d115a3"
    },
    "description":  "Manager user",
    "id":  "051e4c84-af48-4372-82b9-432879d115u3",
    "type":  "manager",
    "updated":  "Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)",
    "updatedBy": {
      "id":  "051e4c84-af48-4372-82b9-432879d115a3"
    }
  },
  {
    "created":  "Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)",
    "createdBy": {
      "id":  "051e4c84-af48-4372-82b9-432879d115a3"
    },
    "description":  "Admin user",
    "id":  "051e4c84-af48-4372-82b9-432879d115u1",
    "type":  "admin",
    "updated":  "Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)",
    "updatedBy": {
      "id":  "051e4c84-af48-4372-82b9-432879d115a3"
    }
  },
  {
    "created":  "Tue Sep 29 2015 15:03:08 GMT+0200 (CEST)",
    "createdBy": {
      "id":  "051e4c84-af48-4372-82b9-432879d115a3"
    },
    "description":  "default user",
    "id":  "051e4c84-af48-4372-82b9-432879d115u2",
    "type":  "user",
    "updated":  "Sun Jul 31 2016 03:06:40 GMT+0200 (CEST)",
    "updatedBy": {
      "id":  "051e4c84-af48-4372-82b9-432879d115a3"
    }
  }
];


export default class RoleMock {
  find (query) {
    return find({
      query,
      mock: rolesMock,
    });
  }

  findById (query) {
    return findById({
      query,
      mock: rolesMock,
    });
  }

  findByType (query) {
    return findByField({
      query,
      mock: rolesMock,
      field: 'type'
    });
  }
}
