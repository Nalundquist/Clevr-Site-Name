import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';
import rootReducer from '../../reducers/index';
import { createStore } from 'redux';

let store = createStore(rootReducer)

describe("rootReducer", () => {
	test('Should return default state if no action is taken', () => {
		expect(rootReducer({}, {type: null})).toEqual({
			mainPostList: {},
			formVisibleOnPage: false
		});
	})

	test('Check that NEW_POST action adds to mainPostList and rootReducer', () => {
		const action = {
			type: 'NEW_POST',
			timestamp: 'January 4th, 2022 14:45:29',
			author: 'PotatoLover1984',
			title: 'Love to eat those tates',
			body: 'Gosh bedarned I love to consume nightshades and other buried root vegetables, mostly those of my namesake.  So excited to have some mashed taters later',
			votes: 345,
			id: 5
		}
		store.dispatch(action);
		expect(store.getState().mainPostList).toEqual(postListReducer(undefined, action));
	})

	test('Check that TOGGLE_FORM changes state in formVisibleOnPage and rootReducer', () => {
		const action = {
			type: 'TOGGLE_FORM'
		}
		store.dispatch(action);
		expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
	})
})