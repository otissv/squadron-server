'use strict';

import mocks from './mocks';
import Action from './action/action-connector';
import Address from './address/address-connector';
import Note from './note/note-connector';
import Role from './role/role-connector';
import User from './user/user-connector';

const {
  actionMock,
  addressMock,
  noteMock,
  rolesMock,
  userMock
} = mocks;


function connectors (mock) {
  /* eslint-disable no-multi-spaces */
  return {
    action  : mock ? actionMock  : Action,
    address : mock ? addressMock : Address,
    note    : mock ? noteMock    : Note,
    role    : mock ? roleMock    : Role,
    user    : mock ? userMock    : User
  };
  /* eslint-enable no-multi-spaces */
};


export default connectors;