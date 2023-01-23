import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar';


export class App extends Component {
  state = {
    searchText: ''
  };

  getSearchSubmit = searchText => {
    this.setState({ searchText })
  };


  render() {
    return (
      <div>
        <Searchbar onSubmit={this.getSearchSubmit} />
      </div>
    )
  }
}
