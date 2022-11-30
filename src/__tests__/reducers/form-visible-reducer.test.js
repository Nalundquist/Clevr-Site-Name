import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {
	test('Should return default state when given a null action', () => {
		expect(formVisibleReducer(false, {type: null})).toEqual(false);
	})

	test('Should change state upon receiving toggle action', () => {
		expect(formVisibleReducer(false, {type: 'TOGGLE_FORM'})).toEqual(true);
	})
})