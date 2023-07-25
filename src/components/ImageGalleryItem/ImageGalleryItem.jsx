import React from 'react';
import PropTypes from 'prop-types';
import styled from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <li className={styled.imageGalleryItem} onClick={handleClick}>
      <img
        className={styled['imageGalleryItem-image']}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ImageGalleryItem };