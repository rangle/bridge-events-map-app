import * as actions from './eventDetailsActions';
import * as types from './actionTypes';

describe('actions', () => {
  it('should create an action to load event details', () => {
    const response = { title: 'Mariah Carey', city: 'Toronto'};
    const expectedAction = {
      type: types.ACTION_TYPES.LOAD_EVENT_DETAILS,
      payload: { details: {title: 'Mariah Carey', city: 'Toronto'}},
    };
    expect(actions.getEvent(response)).toEqual(expectedAction);
  });
});
