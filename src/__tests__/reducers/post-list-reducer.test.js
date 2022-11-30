import postListReducer from "../../reducers/post-list-reducer";

describe('postListReducer', () => {

	let action; 

	const newTicket =     {
		timestamp: 'Last Week',
		author:'a',
		title: 'a',
		body: 'a',
		votes: 0,
		id: 1
	}
	test('Should return default state if no action is specified', () => {
		expect(postListReducer({}, {type: null})).toEqual({});
	});

	test('Should add any posts made to mainPostList', () => {
		action = {
			type: 'NEW_POST',
			timestamp: newTicket.timestamp,
			author: newTicket.author,
			title: newTicket.title,
			body: newTicket.body,
			votes: newTicket.votes,
			id: newTicket.id
		}
		expect(postListReducer({}, action)).toEqual({"1":{
			timestamp: 'Last Week',
			author:'a',
			title: 'a',
			body: 'a',
			votes: 0,
			id: 1
		}})
	})
})