import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import events from './eventReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  events,
});

export default rootReducer;
