import React from "react";
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewPostForm from './NewPostForm';
import {v4} from 'uuid';

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
    dispatch(action);
  }

  handleNewPost = (newPost) => {
    const {dispatch} = this.props;
    const { id, timestamp, author, body, title, votes } = newPost;
    const action = {
      type: 'NEW_POST',
      id: id,
      timestamp: timestamp,
      author: author,
      body: body,
      title: title,
      votes: votes
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  initialSeed = () => {
    const {dispatch} = this.props;
    const action =
    {
      type: 'NEW_POST',
      timestamp: '2022-1-4 14:45:29',
      author: 'PotatoLover1984',
      title: 'Love to eat those tates',
      body: 'Gosh bedarned I love to consume nightshades and other buried root vegetables, mostly those of my namesake.  So excited to have some mashed taters later',
      votes: 345,
      id: v4()
    }
    const action2 = 
    {
      type: 'NEW_POST',
      timestamp: '2007-11-10 08:24:09',
      author:'SeinfeldFan87',
      title: 'I had this great movie idea',
      body: 'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don\'t carewhat humans think is impossible.',
      votes: 0,
      id: v4()
    }
    const action3 = 
    {
      type: 'NEW_POST',
      timestamp: '2000-10-30 23:59:00',
      author: 'WitchFingerz',
      title: 'The veil is thin...',
      body: 'Making so many potions and concoctions in preparation for All Hollows Eve.  My nose is twitching with delight.',
      votes: 13,
      id: 1
    }
    const action4 =
    {
      type: 'NEW_POST',
      timestamp: '2022-11-28 10:04:29',
      author:'LoserTroll2000',
      title: 'This forum sucks lmao',
      body: 'Nobody posts here???  You are all diaper babies lol',
      votes: -19,
      id: v4()
    }
    dispatch(action);
    dispatch(action2);
    dispatch(action3);
    dispatch(action4);
    dispatch({type: 'SEED_DATA'});
  }


  render(){
    const buttonStyle = {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      height: '50px',
      width: '50px'
    }

    let visibleComponent = null;
    console.log(this.props.postListIsEmpty);
    if(this.props.postListIsEmpty){
      this.initialSeed();
    }
    if (this.props.formVisibleOnPage){
      visibleComponent = <NewPostForm onNewPost={this.handleNewPost} />
    } else {
      visibleComponent = <PostList postList={this.props.sortedPostList}/>
    }
    return (
      <React.Fragment>
        <div>
          {visibleComponent}
  				<div style={buttonStyle}>
  					<button onClick={this.handleClick}>I'm button</button>
  				</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  let sortedPostList = {...state.mainPostList}
  sortedPostList = Object.values(sortedPostList).sort((a, b) => a.votes - b.votes);
  return{
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    postListIsEmpty: state.postListIsEmpty,
    sortedPostList: sortedPostList
  }
}

PostControl = connect(mapStateToProps)(PostControl);

PostControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  postListIsEmpty: PropTypes.bool,
  sortedPostList: PropTypes.object
}

export default PostControl;