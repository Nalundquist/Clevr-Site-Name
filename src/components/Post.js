import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
	const postStyle = {
		width: '55%',
		height: '27vh',
		border: '2px solid grey',

	}

	return(
    <React.Fragment>
		  <div style={postStyle}>
		  	<h2>{props.author}</h2>
        <h2>{props.title}</h2>
        <h2>{props.body}</h2>
        <h2>{props.votes}</h2>
        <h2>{props.timestamp}</h2>
		  </div>
    </React.Fragment>
	)
}

Post.propTypes = {
  timestamp: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  votes: PropTypes.number
}
export default Post;