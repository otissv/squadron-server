import actionSeed from '../api/permisions/action/seed-action';
import addressSeed from '../api/address/seed-address';
import ficalYearSeed from '../api/fiscalYear/seed-fiscalYear';
import noteSeed from '../api/note/seed-note';
import roleSeed from '../api/permisions/role/seed-role';
import teamSeed from '../api/team/seed-team';
import userSeed from '../api/user/seed-user';

/* seed redis */
actionSeed();

/* seed rethinkdb */
addressSeed();
ficalYearSeed();
noteSeed();
roleSeed();
teamSeed();
userSeed();
