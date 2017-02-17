import 'whatwg-fetch';

import { EVENTFUL_API_BASE_URL, EVENTFUL_API_KEY } from '../config/api';
import { buildQueryString } from './helpers';

function request(endpoint, method = 'GET') {
  return fetch(`${EVENTFUL_API_BASE_URL}/${endpoint}`, {
    method,
    // headers: {
    //   'Content-Type': 'application/json',
    //   ...extraHeaders,
    // },
  }).then(response => response.json());
}

export function get(endpoint, params) {
  const queryString = buildQueryString({
    app_key: EVENTFUL_API_KEY,
    ...params,
  });
  const url = `${endpoint}?${queryString}`;
  return request(url);
}
