'use strict';

import { find, findById, findByField } from '../../../squadron-utils';


export const teamsMock = [
  { id: 'team-0',
    name: 'Toy and Sons',
    manager: { id: 'user-0' }
  },
  { id: 'team-1',
    name: 'Murazik - Stoltenberg',
    manager: { id: 'user-0' }
  },
  { id: 'team-2',
    name: 'Pacocha Group',
    manager: { id: 'user-0' }
  },
  { id: 'team-3',
    name: 'Bins - Koch',
    manager: { id: 'user-0' }
  },
  { id: 'team-4',
    name: 'Wyman - Heaney',
    manager: { id: 'user-0' }
  },
  { id: 'team-5',
    name: 'McGlynn - Hilll',
    manager: { id: 'user-0' }
  },
  { id: 'team-6',
    name: 'Altenwerth - Balistreri',
    manager: { id: 'user-0' }
  },
  { id: 'team-7',
    name: 'Bergnaum and Sons',
    manager: { id: 'user-0' }
  },
  { id: 'team-8',
    name: 'Flatley LLC',
    manager: { id: 'user-0' }
  },
  { id: 'team-9',
    name: 'Dickinson Inc',
    manager: { id: 'user-0' }
  },
  { id: 'team-10',
    name: 'Dietrich, O\'Hara and Yost',
    manager: { id: 'user-0' }
  }
];


export default class TeamMock {
  find (query) {
    return find({
      query,
      mock: teamsMock
    });
  }

  findById (query) {
    return findById({
      query,
      mock: teamsMock
    });
  }

  findByTeamname (query) {
    return findByField({
      query,
      mock: teamsMock,
      field: 'teamname'
    });
  }
}
