import * as types from '../actions/actionTypes';

export default function geolocationReducer(state = {}, action) {
  switch (action.type) {

  case types.ACTION_TYPES.GET_CURRENT_GEOLOCATION:
    return action.payload.location;

  default:
    return state;
  }
}
