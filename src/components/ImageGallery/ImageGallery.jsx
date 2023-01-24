import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import css from '../ImageGallery/ImageGallery.module.css'

export const ImageGallery = (pictures) => ( 

    <ul className={css.ImageGallery}>
    <ImageGalleryItem pictures={pictures } />
    </ul>
)

