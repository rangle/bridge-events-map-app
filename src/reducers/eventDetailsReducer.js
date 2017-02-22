import * as types from '../actions/actionTypes';

export default function(state = {}, action) {
  switch (action.type) {

  case types.ACTION_TYPES.LOAD_EVENT_DETAILS:
    return action.payload.details;

  default:
    return state;
  }
}
