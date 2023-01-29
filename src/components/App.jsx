import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import {ImageGalleryItem} from "./ImageGalleryItem/ImageGalleryItem"
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from 'components/Modal/Modal'

export class App extends Component {
  state = { 
    query: '',
    page: 1,
    loading: false,
    error: null,
    images: [],
    isOpenModal: false,
    index: null,
    
  }

  componentDidUpdate = (prevProps, prevState) => {
    
    if (prevState.query !== this.state.query) {
      
      this.setState({ loading: true, images: []});
    //  console.log(this.props.pictures.page);
      fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=31092155-fdd6914219543248b658a821f&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }

          return Promise.reject(
            new Error(`We don't have pictures with ${this.state.query} word`));
        })
        .then(images => this.setState({ images: images.hits }))

      
        .catch(error => this.setState({ error }))
      .finally(() => { this.setState({ loading: false }); this.setState(prevState => ({ page: prevState.page + 1 })) })
    }
  }

  

  loadMore = () => { 
   
  
      this.setState({ loading: true});
      
    //  console.log(this.props.pictures.page);
      fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=31092155-fdd6914219543248b658a821f&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }

          return Promise.reject(
            new Error(`We don't have pictures with ${this.state.query} word`));
        })
        .then(images => this.setState(prevState => ({
          images: [...prevState.images, ...images.hits] ,
          page: prevState.page + 1,
        })))

      
        .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }))
    
  
  }

  toggleModal = () => {this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }))}


    getIndex = (index) => {
  this.setState({index})
  }

  // onClick={this.toggleModal}
  // getIndex={this.getIndex}
  // index={index}

  getSearchSubmit = (query) => {
    this.setState({ query })
     this.setState({page: 1})
  };

  render() {
      const {loading, error, images, page, isOpenModal, index} = this.state
     
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 24,
      }}>
        <Searchbar onSubmit={this.getSearchSubmit} />
        {error && <div>{error.message}</div>}
        {loading && <Loader/>}
        <ImageGallery >
          {images.map((image, index) => {
            return < ImageGalleryItem onClick={this.toggleModal} getIndex={this.getIndex} key={image.id} index={index} image={image.webformatURL} tags={image.tags} />
           
          })}
           
          
        </ImageGallery>
        
        {images.length >= 12 && <Button onLoadMore={this.loadMore} pageNumber={page} />} 
           {isOpenModal && <Modal onClose={this.toggleModal}><img src={images[index].largeImageURL} alt={images[index].tags}/></Modal>}
      </div>
    )
  }
}















































// import React, { Component } from 'react'
// import Searchbar from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
// // import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';


// export class App extends Component {
//   state = {
//     searchText: '',
//     pageNumber: 1,
//   };

//   getSearchSubmit = searchText => {
//     this.setState({ searchText })
//   };

//   componentDidUpdate = (prevProps, prevState) => {
//     if (prevState.searchText !== this.state.searchText) {
//       this.setState({pageNumber: 1})
//     }
//   }
  
//   loadMore = () => { 
//     // event.preventDefault() 
    
//         this.setState(prevState => ({
//       pageNumber: prevState.pageNumber + 1
       
//     }))

//   }


//   render() {
//     return (
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr',
//         gridGap: 16,
//         paddingBottom: 24,
//       }}>
//         <Searchbar onSubmit={this.getSearchSubmit} />
//         <ImageGallery pictures={this.state.searchText} page={this.state.pageNumber} />
//         {this.state.searchText && <Button onClick={this.loadMore} pageNumber={this.state.pageNumber} /> }        
       
//       </div>
//     )
//   }
// }
