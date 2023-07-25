import React, { useState, useEffect } from 'react';
import {Searchbar} from './Searchbar/Searchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'
import Modal from './Modal/Modal'
import GetImages from '../Services/api'
import Button from './Button/Button'
import Loader from './Loader/Loader'
import styled from './App.module.css'

export const App = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (!searchQuery) return;

    const getImages = async () => {
      setIsLoading(true);
      const newImages = await GetImages(searchQuery, page);
      setImages(prevImages => [...prevImages, ...newImages]);
      setIsLoading(false);
    };

    getImages();
  }, [searchQuery, page]);

  const handleImageClick = imageURL => {
    setLargeImageURL(imageURL);
    setShowModal(true);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  const handleSearchSubmit = query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };
  
  const handleCloseModal = () => {
    setLargeImageURL('');
    setShowModal(false);
  };

  return (
    <div className={styled.App}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />
      )}
    </div>
  );
};