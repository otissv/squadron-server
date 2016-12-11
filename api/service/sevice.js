import authenicationService from './authentication-service';
import authorisedService from './authorised-service';


export function authenication (opts) {
  return authenicationService(opts);
};

export function authorised (opts) {
  return authorisedService(opts);
}
