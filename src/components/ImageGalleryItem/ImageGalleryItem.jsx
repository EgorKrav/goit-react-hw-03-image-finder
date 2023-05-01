import PropTypes from 'prop-types';
import c from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li className={c.galleryItem} onClick={() => openModal(largeImageURL)}>
      <img src={src} alt={alt} className={c.image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
