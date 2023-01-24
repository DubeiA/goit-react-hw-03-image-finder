import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';


export class App extends Component {
  state = {
    searchText: ''
  };

  getSearchSubmit = searchText => {
    this.setState({ searchText })
  };


  render() {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 24,
      }}>
        <Searchbar onSubmit={this.getSearchSubmit} />
        <ImageGallery pictures={this.state.searchText}>
           <ImageGalleryItem />
        </ImageGallery>
       
      </div>
    )
  }
}
