import React, { Component } from 'react'
import css from '../ImageGalleryItem/ImageGalleryItem.module.css'


export default class ImageGalleryItem extends Component {

  state = { 
  pictures: null,
}

  componentDidUpdate = (prevProps, prevState) => {
    
    if (prevProps.pictures !== this.props.pictures) {
      
      fetch(`https://pixabay.com/api/?q=${this.props.pictures.pictures}&page=1&key=31092155-fdd6914219543248b658a821f&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        .then(pic => pic.hits)
      .then(pictures=> this.setState({pictures}))
    }
  }
  

  render() {

    const { pictures } = this.state;
    console.log(pictures);
    return (
      
        pictures && pictures.map(picture => {
            return <li className={css.ImageGalleryItem} key={picture.id}>
              <img className={css.ImageGalleryItemImage} src={picture.webformatURL} alt={picture.tag} />
              </li>
          })  
      
    )
  }
}



