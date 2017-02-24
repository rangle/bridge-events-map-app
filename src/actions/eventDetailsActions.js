import * as types from './actionTypes';
import {get} from '../api/request';
import { loadEvents } from './eventActions';

export function getEvent(details) {
  return {
    type: types.ACTION_TYPES.LOAD_EVENT_DETAILS,
    payload: {
      details,
    },
  };
}

export function loadEventDetails(idParam) {
  return dispatch => {
    get('events/get', { id: idParam })
      .then(response => {
        dispatch(getEvent(response));
        return response;
      })
      .then(function getResp(response) {
        dispatch(loadEvents(
          {
            location: response.city,
            category: response.categories.category[0].id,
            page_size: 3,
          }));
        return response;
      })
      .catch(error => {
        throw (error);
      });
  };
}
