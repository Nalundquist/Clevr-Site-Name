import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
	const postListStyle = {
		width: '70%',
		height: '80vh',
		margin: '25px'
	}

  // let sortedPostList = Object.values(props.postList).map((post))
  // sortedPostList.sort((a, b) => a.votes - b.votes);
	return (
		<React.Fragment>
			<div style={postListStyle}>
				{Object.values(props.postList).map((post, index) => 
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

PostList.propTypes = {
	postList: PropTypes.object
}
export default PostList;