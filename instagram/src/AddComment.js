import React, { Component } from 'react';

class AddComment extends Component {
  constructor() {
    super();
    this.state = {

    };
    this.CommentAdd = this.CommentAdd.bind(this);
  }

  CommentAdd(event) {
    event.preventDefault;
    this.setState({})
  }

  render() {
    return (
      <form onSubmit={this.CommentAdd}>
      <input 
      placeholder="Add a Comment"
      />
      </form>
      )
  }

}

export default AddComment;