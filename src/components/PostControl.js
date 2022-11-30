import React from "react";
import PostList from './PostList';
import { connect } from 'react-redux';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClick = () => {
    const {dispatch} = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
  }

  render(){
    const buttonStyle = {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      height: '50px',
      width: '50px'
    }

    return (
      <React.Fragment>
        <div>
          <PostList />
  				<div style={buttonStyle}>
  					<button onClick={this.handleClick} >I'm button</button>
  				</div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostControl;