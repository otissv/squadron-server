'use strict';

export default `
type FiscalYear {
  id          : String,
  active      : String,
  created     : String,
  createdBy   : User,
  description : String,
  notes       : [Note],
  start       : String,
  end          : String,
  updated     : String,
  updatedBy   : User,
}
`;

export const fiscalYearQueries = `
  fiscalYearFindAll(id: [String]): [FiscalYear]
  fiscalYearFindById(id: String): FiscalYear
`;


export const fiscalYearMutations = `
  fiscalYearCreate(
    id          : String,
    active      : Boolean,
    description : String,
    start       : String,
    end         : String
    notes       : [String]
  ): FiscalYear
  fiscalYearUpdate(
    id        : String,
    active      : Boolean,
    description : String,
    start       : String,
    end         : String
    notes       : [String]
  ): FiscalYear
  fiscalYearRemove(
    id          : String
  ): FiscalYear
`;
