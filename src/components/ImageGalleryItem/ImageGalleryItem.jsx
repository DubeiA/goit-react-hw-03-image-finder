import React, {Component} from 'react';
import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';


export class ImageGalleryItem extends Component {

  handleImageClick = (index) => {
    this.props.getIndex(index)
  }

  render() {
    const { image, tags, onClick, index } = this.props;
    return <li onClick={onClick} className={css.ImageGalleryItem}><img onClick={() => {this.props.getIndex(index)}} src={image} alt={tags} className={css.image}  /> </li>
  }
}

ImageGalleryItem.propTypes = {
  getIndex: PropTypes.func,
  image: PropTypes.string,
  tags: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
}


// import { ThreeDots } from  'react-loader-spinner'

// export default class ImageGalleryItem extends Component {

//   state = {
//     pictures: null,
//     error: null,
//     status: 'idle'

//   }

  // componentDidUpdate = (prevProps, prevState) => {
    
  //   if (prevProps.pictures !== this.props.pictures) {

  //     console.log(prevState.pictures);
  //     console.log(this.state.pictures);
  //     this.setState({ status: "pending" });
  //   //  console.log(this.props.pictures.page);
  //     fetch(`https://pixabay.com/api/?q=${this.props.pictures.pictures}&page=${this.props.pictures.page}&key=31092155-fdd6914219543248b658a821f&image_type=photo&orientation=horizontal&per_page=12`)
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json()
  //         }

  //         return Promise.reject(
  //           new Error(`We don't have pictures with ${this.props.pictures.pictures} word`));
  //       })
  //       .then(pictures => this.setState({ pictures, status: 'resolved' }))

      
  //       .catch(error => this.setState({ error, status: 'rejected' }))

    
  //   }

    
  // }
  

//   render() {

//     const { pictures, status, error } = this.state;
//     // console.log(pictures);

//     if (status === 'idle') {
//       return <h1>Введіть слово в пошуковику</h1>
//     }

//     if (status === 'pending') {
//       return <ThreeDots 
// height="80" 
// width="80" 
// radius="9"
// color="#4fa94d" 
// ariaLabel="three-dots-loading"
//         wrapperStyle={{
//    position: "fixed",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
// }}
// wrapperClassName=""
// visible={true}
//  />

        
      
//     }

//     if (status === 'rejected') {
//       return <h1>{error.message}</h1>
//     }

    // if (status === 'resolved') {
      // return pictures.hits.map(picture => {
      //   return <li className={css.ImageGalleryItem} key={picture.id}>
      //     <img className={css.ImageGalleryItemImage} src={picture.webformatURL} alt={picture.tag} />
      //   </li>
      // })
    // }


  // }


// }
