import * as types from '../actions/actionTypes';

export default function recipeReducer(state = [], action) {
  switch (action.type) {

  case types.ACTION_TYPES.LOAD_EVENTS_SUCCESS:
    return action.payload.events;

  default:
    return state;
  }
}
