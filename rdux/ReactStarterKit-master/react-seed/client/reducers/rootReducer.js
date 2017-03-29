import {combineReducers} from 'redux';
import posts from './postReducer';
import comments from './commentReducer';

var rootReducer=combineReducers({
    // posts:posts,
    // comments:comments
    posts,
    comments
});
//store does not accept all reducers
//So every reducer is combined with rootReducer
export default rootReducer;