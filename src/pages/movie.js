// pages/movie.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesData from 'assets/movies.json';
import actorsData from 'assets/actors.json';
import BlurOverlay from 'components/atoms/BlurOverlay';
import style from './Movie.module.scss';
import {ArrowTopRight} from 'components/atoms/Iconset';
import Star from 'components/atoms/Star';
import Accordion from 'components/Accordion';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const movieData = moviesData.find((movie) => movie.id === Number(id));
    setMovie(movieData);

    setActors(actorsData);
  }, [id]);

  if (!movie) {
    return <></>;
  }

  const accordionItems = [
    {
      title: 'Synopsis',
      content: (
        <p>
          {movie.synopsis}
        </p>
      ),
    },

    {
      title: 'Plot',
      content: (
        <p>
          {movie.plot} 
        </p>
      ),
    },

    {
      title: 'Cast',
      content: (
        <div className={style.actors}>
          {[...movie.actors].map((actor) => (
            <div key={actor.id} className={style.actor}>
              <img className={style.pfp} src={require(`assets/images/actors/small/${actors[actor.id].pfp}.jpg`)} alt={actors[actor.id].name} />
              <div className={style.actorDetails}>
                <p className={style.actorName}>{actors[actor.id].name}</p>
                <p className={style.hint}>Playing as:</p>
                <p className={style.actorRole}>{actor.role}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className={style.container}>

      <div className={style.content}>

        <div className={style.mainDetails}>
          <p className={style.date}>{movie.releaseDate}</p>
          <h1 className={style.title}>{movie.title}</h1>
          <div className={style.ratingContainer}>
            <div className={`${style.stars} ${style._allowCascade}`}><Star rating={movie.rating}/></div>
            <p className={style.number}>{movie.reviews}</p>
            <p className={style.text}>Reviews</p>
          </div>
          {/*bookmark icon is missing*/}
        </div>
        <div className={style.accordion}>
                  <Accordion items={accordionItems} defaultIndex={0}/>
        </div>
        <div className={style.footer}>
          <a href={`https://www.google.com/search?q=buy+ticket+for+${movie.title.replace(/\s/g, '+')}`} target="_blank" rel="noreferrer"  className={style.button}>Buy Ticket</a>
          <p className={style.text}>Click the button to get rickrolled - proof you didn't <span>read this</span>.</p>
        </div>
      </div>
      
      <div className={style.visual}>

        <BlurOverlay
          className={style.image}
          src={require(`assets/images/movies/large/${movie.images.portrait[0]}.jpg`)}
          alt={movie.title}
        />

        <a className={style.imageButton} href={`https://www.google.com/search?q=watch+${movie.title.replace(/\s/g, '+')}+online`} target="_blank" rel="noreferrer">
          <p className={style.text}>Watch Online!</p>
          <div className={`${style.icon} ${style._allowCascade}`}><ArrowTopRight/></div>
        </a>

      </div>

    </div>
  );
};

export default MoviePage;

// movie.module.scss
/* Styles for the MoviePage component */