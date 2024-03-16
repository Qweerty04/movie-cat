// components/thumbnailCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './thumbnailCard.module.scss';

const ThumbnailCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="thumbnail-card">
      <img
        src={`/assets/images/movies/small/${movie.imagesIds[0]}.jpg`}
        alt={movie.title}
      />
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.releaseDate}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </Link>
  );
};

export default ThumbnailCard;

// thumbnailCard.module.scss
/* Styles for the ThumbnailCard component */