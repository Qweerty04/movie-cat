// components/searchForm.js
import React, { useState } from 'react';
import Input from './atoms/input';
import './searchForm.module.scss';

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
    <form onSubmit={handleSubmit} className="search-form">
      <Input value={searchTerm} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

// searchForm.module.scss
/* Styles for the SearchForm component */