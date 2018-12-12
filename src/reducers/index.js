import adminInfoReducer from './adminInfoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  addresses: adminInfoReducer
});

export default rootReducer;
