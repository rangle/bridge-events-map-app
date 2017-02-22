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
    // get('events/search', {where: '32.746682%2C-117.162741', within: '25'})
    get('events/search', {location: 'Toronto', date: 'Future', 'page_size': '100'})
    // get('events/search', {where: '32.746682,-117.162741', within: '25'})
    .then(function getResp(response) {
      dispatch(loadEventsSuccess(response.events));
    }).catch(error => {
      throw (error);
    });
  };
}
