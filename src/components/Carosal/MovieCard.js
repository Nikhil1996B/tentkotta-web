import React from 'react';
import Progress from '../../UI_Frontendlib/atoms/linerprogress'
require('./carousal.scss')

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';
const TRUNCATE_LENGTH = 100;

const MovieCard = ({ movie, style }) => (
  <>
    <div
      className="movie-card"
      style={{
        backgroundColor: '#202020',
        backgroundImage: `url(${imageUrl}${size}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="movie-card-container">
        <div className="movie-card-text">
          <div className="movie-card-title">{movie.title} </div>
          <div className="movie-card-info">
            <div className="movie-card-year">{movie.release_date ? movie.release_date.split('-')[0] : null}</div>
          </div>
          {/* <div className="movie-card-description">{movie.overview ? movie.overview.substring(0, TRUNCATE_LENGTH) + '...' : 'Additional text goes here ...'}</div> */}
        </div>
      </div>
    </div>
    <Progress value={'70'} themes={0} />
  </>
);

export { MovieCard };
