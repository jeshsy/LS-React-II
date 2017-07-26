import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      history: []
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.addSearch = this.addSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  addSearch(event) {
    event.preventDefault();
    this.setState({
      search: '',
      history: this.state.history.concat(this.state.search)
    });
  }

  render() {
    return (
      <form onSubmit={this.addSearch}>
        <input
          className="SearchBar"
          onChange={this.updateSearch}
          placeholder="Search"
          value={this.state.search}
        />
      </form>
      );
  }
}

export default SearchBar;