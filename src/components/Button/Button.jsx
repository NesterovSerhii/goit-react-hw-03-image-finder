import React from 'react';
import PropTypes from 'prop-types';
import styled from './Button.module.css'

const Button = ({ onClick }) => {
  return (
    <button type="button" className={styled.btn} onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;