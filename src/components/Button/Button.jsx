
import React from 'react';
import styled from './Button.module.css'

export const Button = ({ onClick, showButton }) => {
  return showButton ? (
    <button className={styled.btn} onClick={onClick}>
      Load more...
    </button>
  ) : null;
};