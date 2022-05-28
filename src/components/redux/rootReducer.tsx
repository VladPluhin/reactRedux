import { combineReducers } from 'redux';
import { postReducer } from './postReducer';

export {combineReducers} from 'redux';
export const rootReducer= combineReducers({
    posts: postReducer
})