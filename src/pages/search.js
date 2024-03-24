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

    const trimmedTerm = term.trim();
    setSearchTerm(trimmedTerm);

    /* @@note
      I liked to use the value of the searchTerm state for the logic below instead of using the 'term' paramater so that I only needed to trim it once.
      However, it seems like the value of the the state is not updated before this conponent is rendered so the next lines would read the state value as empty.
      So instead I created the trimmedTerm variable above.
    */
    const results = trimmedTerm === '' ? [] : moviesData.filter((movie) =>
      (`${movie.title} ${movie.synopsis}`) // Combining title and synopsis to search in both.
        .toLowerCase().includes(trimmedTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className={style.container}>
      <SearchForm onSearch={handleSearch} heading="Search" subHeading="You can search by movie title." />

      {/*
      @@note
      What you see below is a Short-Circuit Evaluation syntax used for conditional rendering.
      It's an alternative way of conditional code execution to 'if' statements and turnary operators. 
      Outside of React it is considered a bad practice, but it's fairly common in JSX.
      */}

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