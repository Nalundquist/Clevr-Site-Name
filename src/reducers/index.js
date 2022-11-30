import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	mainPostList: postListReducer,
	formVisibleOnPage: formVisibleReducer
})

export default rootReducer;