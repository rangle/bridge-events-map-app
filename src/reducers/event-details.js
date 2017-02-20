export default function(state = {details: 'none'}, action) {
  if (action.type === 'LOAD_EVENT_DETAILS') {
    return {
      details: action.payload,
    };
  }
  return state;
}
