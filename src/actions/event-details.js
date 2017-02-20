import * as types from './actionTypes';
import {get} from '../api/request';


function getEvent(details) {
  return {
    type: types.ACTION_TYPES.LOAD_EVENTS_DETAILS,
    payload: {
      details,
    },
  };
}

export function loadEventDetails() {
  return function loadEventDetailsPlz(dispatch) {
    get('events/get', { id: 'E0-001-000278174-6' })
      .then(function getResp(response) {
        console.log(response);
        dispatch(getEvent(response));
      }).catch(error => {
        throw (error);
      });
  };
}
