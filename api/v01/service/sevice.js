import authenicationService from './services-authentication';
import authorisedService from './services-authorised';


export function authenication (opts) {
  return authenicationService(opts);
};

export function authorised (opts) {
  return authorisedService(opts);
}
