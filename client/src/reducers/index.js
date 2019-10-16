// root reducers
import { combineReducers } from 'redux';
import dreamsReducer from './dreamsReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    dreams: dreamsReducer,
    comments: commentReducer
})

export default rootReducer;
