import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from './Searchbar.module.css'

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <header className={styled.searchbar}>
      <form className={styled.form} onSubmit={handleSubmit}>
        <button type="submit" className={styled.button}>
          <span className={styled['button-label']}>Search</span>
        </button>

        <input
          className={styled.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export  {Searchbar};