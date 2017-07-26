import React, { Component } from 'react';
import './App.css';
import postData from './application-data';
import SearchBar from './searchBar';
import Post from './Post';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Post className="Posts"
        postData={postData}/>
      </div>
    );
  }
}

export default App;
