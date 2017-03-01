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

export function loadEvents(param) {
  // add image sizes you would like to have access to here
  const imageSizes = {
    image_sizes: 'perspectivecrop290by250',
  };
  return function loadAllEvents(dispatch) {
    get('events/search', Object.assign({}, param, imageSizes))
    .then(response => {
      response.events.event.map(event => {
        event.image ?
          event.image.perspectivecrop290by250.url :
          event.image = {
            perspectivecrop290by250: {
              url: '../../src/assets/img/' + param.category + '.jpg',
            },
          };
      });
      dispatch(loadEventsSuccess(response.events));
    }).catch(error => {
      throw (error);
    });
  };
}
