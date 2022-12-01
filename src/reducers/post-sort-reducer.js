import mainPostList from './post-list-reducer';

const reducer = (state = {}, action) => {
	switch (action.type){
		case 'SORT_POST':
			let sortedPostList;
			sortedPostList = {...mainPostList};
			console.log(sortedPostList)
			if (sortedPostList != {}){
				sortedPostList.sort((a,b) => a.votes - b.votes);
				return sortedPostList;
			} else {
				return state;
			}
			// Object.values(state).sort((a, b) => a.votes - b.votes);
		default:
			return state;
	}
}

export default reducer;