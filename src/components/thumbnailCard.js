// components/thumbnailCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowTopRight } from 'components/atoms/Iconset';
import style from './ThumbnailCard.module.scss';

const ThumbnailCard = ({ movie, className }) => {
  return (
    <Link to={`/movie/${movie.id}`} className={`${style.container} ${className}`}>
      <div className={style.header}>
        <h2 className={style.heading}>View Details</h2>
        <div className={`${style.icon} ${style._allowCascade}`}><ArrowTopRight/></div>
      </div>
      <img
        className={style.image}
        src={require(`assets/images/movies/small/${movie.imagesIds[0]}.jpg`)}
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