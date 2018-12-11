import adminInfoReducer from './adminInfoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  adminInfoReducer: adminInfoReducer
});

export default rootReducer;
