// components/searchForm.js
import React, { useState } from 'react';
import Input from './atoms/Input';
import style from './SearchForm.module.scss';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <Input value={searchTerm} onChange={handleInputChange} placeholder="Search for movies" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

// searchForm.module.scss
/* Styles for the SearchForm component */