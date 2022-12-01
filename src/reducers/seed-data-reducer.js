const reducer = (state = true, action) => {
	switch (action.type){
		case 'SEED_DATA':
			return false;
		default:
			return state;
	}
}

export default reducer;