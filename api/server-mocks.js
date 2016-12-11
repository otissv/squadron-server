'use strict';


import ActionMock from './permisions/action/mock-action';
import AddressMock from './address/mock-address';
import FiscalYearMock from './fiscalYear/mock-fiscalYear';
import NoteMock from './note/mock-note';
import RoleMock from './permisions/role/mock-role';
import TeamMock from './team/mock-team';
import UserMock from './user/mock-user';


const mocks = {
  actionMock             : ActionMock,
  fiscalYearMock         : FiscalYearMock,
  addressMock            : AddressMock,
  noteMock               : NoteMock,
  roleMock               : RoleMock,
  teamMock               : TeamMock,
  userMock               : UserMock
};


export default mocks;
