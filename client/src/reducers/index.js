import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  auth : authReducer,
  form : formReducer,
  order: orderReducer
});