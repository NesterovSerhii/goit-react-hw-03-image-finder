import React from 'react';
import { Component } from 'react';
import styled from './Modal.module.css'


export class Modal extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styled.overlay} onClick={this.handleOverlayClick}>
        <div className={styled.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}