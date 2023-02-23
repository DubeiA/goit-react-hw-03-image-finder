// import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import css from '../ImageGallery/ImageGallery.module.css';

import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    return <ul className={css.ImageGallery}>{this.props.children}</ul>;
  }
}
