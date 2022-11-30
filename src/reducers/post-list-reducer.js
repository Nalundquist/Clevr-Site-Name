const reducer = (state = {}, action) => {
	const {timestamp, author, title, body, votes, id} = action;
	switch (action.type){
		case 'NEW_POST':
			return Object.assign({}, state, {
				[id]: {
					timestamp: timestamp,
					author: author,
					title: title,
					body: body,
					votes: votes,
					id: id
				}
			})
		default:
			return state;
	}
};

export default reducer;

