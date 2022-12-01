import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import seedDataReducer from './seed-data-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	mainPostList: postListReducer,
	formVisibleOnPage: formVisibleReducer,
	postListIsEmpty: seedDataReducer,
})

export default rootReducer;