// combine reducers is used to combine reducers
import { combineReducers } from 'redux';

// fetch posts from reducers
import posts from './posts';
import authReducer from './auth';

// use combineReducers
export default combineReducers({ posts, authReducer });
