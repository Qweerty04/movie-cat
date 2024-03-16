// pages/movie.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesData from '../assets/movies.json';
import actorsData from '../assets/actors.json';
import './movie.module.scss';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const movieData = moviesData.find((movie) => movie.id === Number(id));
    setMovie(movieData);

    const actorsList = movieData.actorIds.map((actorId) => actorsData[actorId]);
    setActors(actorsList);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.synopsis}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <h2>Actors:</h2>
      <ul>
        {actors.map((actor) => (
          <li key={actor.imageId}>
            <img src={`/assets/images/actors/small/${actor.imageId}.jpg`} alt={actor.name} />
            {actor.name}
          </li>
        ))}
      </ul>
      <h2>Images:</h2>
      <div>
        {movie.imagesIds.map((imageId) => (
          <img
            key={imageId}
            src={`/assets/images/movies/large/${imageId}.jpg`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;

// movie.module.scss
/* Styles for the MoviePage component */