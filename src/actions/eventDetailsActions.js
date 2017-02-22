import * as types from './actionTypes';
import {get} from '../api/request';


function getEvent(details) {
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
      }).catch(error => {
        throw (error);
      });
  };
}
