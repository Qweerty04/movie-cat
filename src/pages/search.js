// pages/search.js
import React, { useState } from 'react';
import SearchForm from 'components/SearchForm';
import ThumbnailCard from 'components/ThumbnailCard';
import moviesData from 'assets/movies.json';
import style from './Search.module.scss';


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className={style.container}>
      <SearchForm onSearch={handleSearch} heading="Search" subHeading="You can search by movie title." />
      {searchTerm && searchResults.length === 0 && (
        <div>No results found for "{searchTerm}"</div>
      )}
      {!searchTerm && (
        <div>Please enter a search term to find movies.</div>
      )}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results for "{searchTerm}"</h2>
          <div className={`${style.grid} ${style._allowCascade}`}>
            {searchResults.map((movie) => (
              <ThumbnailCard key={movie.id} movie={movie} className={style.thumbnailCard} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

// search.module.scss
/* Styles for the SearchPage component */