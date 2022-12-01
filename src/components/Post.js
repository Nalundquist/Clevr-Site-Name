import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
	const postStyle = {
		width: '85%',
		minHeight: '30vh',
		border: '2px solid grey',

	}

	return(
    <React.Fragment>
		  <div style={postStyle}>
		  	<h2>{props.title} - {props.author}</h2>
        <h3>{props.body}</h3>
        <p>{props.votes} Votes. . . . . . . . . . . . . . . . . . . . . . . . {props.timestamp}</p>
        <h2></h2>
        <h2></h2>
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