import axios from 'axios';
import {
  promise,
  generateHash,
  compareHash
} from '../../../../squadron-utils/';


export default function authorisedService ({ auth, service }) {
  const host = service.host;
  const port = service.port;

  const config = {
    url: `${host}:${port}/v01/graphql/`,
    method: 'POST',
    options: {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  };

  const data = {
    variables: auth,
    query: `query authorised ($id: String, $token: String) {
      authorised (id:$id, token: $token) {
        id roles _result_
      }
    }`,
    client: {
      host: "squadron.local.server"
    }
  };

  return axios({ ...config, data });
}
