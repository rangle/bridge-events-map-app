import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import events from './eventReducer';
import { reducer as formReducer } from 'redux-form';
import LoadDetailsReducer from './eventDetailsReducer';
import geolocationReducer from './geolocationReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  details: LoadDetailsReducer,
  events,
  currentLocation: geolocationReducer,
});

export default rootReducer;
