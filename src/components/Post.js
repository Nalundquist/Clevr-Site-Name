import React from 'react';
import PropTypes from 'prop-types';
import "../index.css"
import profileImg from "../img/profileimg.png";

function Post(props){
	const postStyle = {
		width: '85%',
    padding: '10px',
		minHeight: '30vh',
		border: '2px solid grey'
	}

	return(
    <React.Fragment>
		  <div style={postStyle}>
        <div class="timeStyle">
          <h3><img src={profileImg}></img>{props.author}</h3>
        </div>
		  	<h2 >{props.title}</h2>
        <h4>{props.body}</h4>
        <p class="timeStyle">{props.timestamp}</p>
        <div class="gg-arrow-up"></div>
        <p>{props.votes}</p>
        <div class="gg-arrow-down"></div>
        
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