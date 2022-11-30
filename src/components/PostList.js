import React from 'react';
import Post from './Post';

function PostList(){
	const postListStyle = {
		width: '70%',
		height: '80vh',
		margin: '25px'
	}

  const mainPostList = [
		{
			timestamp: 'January 4th, 2022 14:45:29',
			author: 'PotatoLover1984',
			title: 'Love to eat those tates',
			body: 'Gosh bedarned I love to consume nightshades and other buried root vegetables, mostly those of my namesake.  So excited to have some mashed taters later',
			votes: 345,
			id: 5
		},
    {
      timestamp: 'November 2nd, 2007 08:24:09',
      author:'SeinfeldFan87',
      title: 'I had this great movie idea',
      body: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don\'t carewhat humans think is impossible.',
      votes: 0,
      id: 2
    },
		{
			timestamp: 'October 30th, 2000 23:59:00',
			author: 'WitchFingerz',
			title: 'The veil is thin...',
			body: 'Making so many potions and concoctions in preparation for All Hollows Eve.  My nose is twitching with delight.',
			votes: 13,
			id: 3
		},
    {
      timestamp: 'November 28th, 2022 10:04:29',
      author:'LoserTroll2000',
      title: 'This forum sucks lmao',
      body: 'Nobody posts here???  You are all diaper babies lol',
      votes: -19,
      id: 4
    },
    {
      timestamp: 'Last Week',
      author:'',
      title: '',
      body: '',
      votes: 0,
      id: 1
    }
]

const sortedPostList = mainPostList.sort((a, b) => a.votes - b.votes);

	return (
		<React.Fragment>
			<div style={postListStyle}>
        {/**/}
				{mainPostList.map((post, index) => 
					<Post 
					timestamp={post.timestamp}
					author={post.author}
					title={post.title}
					body={post.body}
					votes={post.votes}
          key={index}/>
				)}
			</div>
		</React.Fragment>
	)
}
export default PostList;