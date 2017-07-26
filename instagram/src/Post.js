import React, { Component } from 'react';
import heartUnfilled from './heartunfilled.png';
import heartFilled from './heartfilled.png';
import wordBubble from './wordbubble.png';
import './Post.css';

class Post extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {this.props.postData.map((post, index) => {
          return (
            <div className="Post">
              <img src={post.thumbnailUrl} className="thumbnail" alt="logo" />
              <div className="thumbnailUser">{post.username}</div>
              <br/>
              <br/>
              <br/>
              <img src={post.imageUrl} className="image" alt="IGpost" />
              <div className="icons">
                <img src={heartUnfilled} className="like" alt="heart"/>
                <img src={wordBubble} className="bubble" alt="wordbubble"/>
              </div>
              <div className="likeNumber">{post.likes + " likes"}</div>
              {post.comments.map((comment, index) => {
                return(
                  <div className="commentContainer">
                    <div className="commentUsername">{comment.username}</div>
                    <div className="comment">{comment.text}</div>
                    <br />
                  </div>
                  )
              })}
              <div className="timestamp">{post.timestamp}</div>
              <input className="addComment" placeholder="Add a comment..."/>
            </div>
            )
        })}
      </div>
      )
  }

}

export default Post;