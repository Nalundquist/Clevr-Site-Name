import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import seedDataReducer from './seed-data-reducer';
import postSortReducer from './post-sort-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	mainPostList: postListReducer,
	formVisibleOnPage: formVisibleReducer,
	postListIsEmpty: seedDataReducer,
	sortedPostList: postSortReducer
})

export default rootReducer;