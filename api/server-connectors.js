'use strict';

import mocks from './server-mocks';
import Action from './permisions/action/connector-action';
import Address from './address/connector-address';
import FiscalYear from './fiscalYear/connector-fiscalYear';
import Note from './note/connector-note';
import Role from './permisions/role/connector-role';
import Team from './team/connector-team';
import User from './user/connector-user';


const {
  actionMock,
  addressMock,
  fiscalYearMock,
  noteMock,
  roleMock,
  teamMock,
  userMock
} = mocks;


function connectors (mock) {
  /* eslint-disable no-multi-spaces */
  return {
    action            : mock ? actionMock             : Action,
    address           : mock ? addressMock            : Address,
    fiscalYear        : mock ? fiscalYearMock         : FiscalYear,
    note              : mock ? noteMock               : Note,
    role              : mock ? roleMock               : Role,
    team              : mock ? teamMock               : Team,
    user              : mock ? userMock               : User
  };
  /* eslint-enable no-multi-spaces */
};


export default connectors;
