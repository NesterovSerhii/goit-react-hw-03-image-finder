import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from './Modal.module.css'

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styled.overlay} onClick={handleClick}>
      <div className={styled.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClock: PropTypes.func.isRequired,
};

export default Modal;