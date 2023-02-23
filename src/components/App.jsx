import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from 'components/Modal/Modal';
import * as PickAPI from './services';

import css from './ImageGallery/ImageGallery.module.css';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    loading: false,
    error: null,
    images: [],
    isOpenModal: false,
    index: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.query !== this.state.query) {
      this.setState({ loading: true, images: [] });

      PickAPI.fetchPictures(this.state.query, this.state.page)
        .then(images => this.setState({ images: images.hits }))

        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
          this.setState(prevState => ({ page: prevState.page + 1 }));
        });
    }
  };

  loadMore = () => {
    this.setState({ loading: true });

    PickAPI.fetchPictures(this.state.query, this.state.page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          page: prevState.page + 1,
        }))
      )

      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  toggleModal = () => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  getIndex = index => {
    this.setState({ index });
  };

  getSearchSubmit = query => {
    this.setState({ query });
    this.setState({ page: 1 });
  };

  render() {
    const { loading, error, images, page, isOpenModal, index } = this.state;

    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.getSearchSubmit} />
        {error && <div>{error.message}</div>}
        {loading && <Loader />}
        <ImageGallery>
          {images.map((image, index) => {
            return (
              <ImageGalleryItem
                onClick={this.toggleModal}
                getIndex={this.getIndex}
                key={image.id}
                index={index}
                image={image.webformatURL}
                tags={image.tags}
              />
            );
          })}
        </ImageGallery>

        {images.length >= 12 && (
          <Button onLoadMore={this.loadMore} pageNumber={page} />
        )}
        {isOpenModal && (
          <Modal onClose={this.toggleModal}>
            <img src={images[index].largeImageURL} alt={images[index].tags} />
          </Modal>
        )}
      </div>
    );
  }
}
