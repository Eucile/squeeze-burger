import theGoogsReducer from './theGoogsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  theGoogsReducer: theGoogsReducer
});

export default rootReducer;
