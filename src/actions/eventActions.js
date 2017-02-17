// import { EVENTFUL_API_BASE_URL, EVENTFUL_API_KEY } from '../config/api';
import * as types from './actionTypes';
import {get} from '../api/request';


export function loadEventsSuccess(events) {
  return {
    type: types.ACTION_TYPES.LOAD_EVENTS_SUCCESS,
    payload: {
      events,
    },
  };
}

export function loadEvents() {
  return function loadAllEvents(dispatch) {
  //   $.get(GET_EVENTS)
  //     .then(response => {
  //       dispatch(loadEventsSuccess(response));
  //     }).catch(error => {
  //       throw (error);
  //     });
  // };

    get('events/search', {where: '32.746682,-117.162741', within: '25'}).then(response => {
      dispatch(loadEventsSuccess(response));
    }).catch(error => {
      throw (error);
    });
  };
}
