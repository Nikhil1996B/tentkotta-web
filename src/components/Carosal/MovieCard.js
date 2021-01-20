import React from 'react';
import Progress from '../../UI_Frontendlib/atoms/linerprogress';
import Skeleton from '@material-ui/lab/Skeleton';
import playbtn from './icons/playbtn.png';
require('./carousal.scss')

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';
const TRUNCATE_LENGTH = 100;

const MovieCard = ({ movie, style, progressBar = false, displayTextOnCard = false }) => (
  <div>
    <div
      className="movie-card"
      style={{
        backgroundColor: '#202020',
        backgroundImage: `url(${imageUrl}${size}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={() => { return window.location.pathname = "/player" }}
    >
      <div className="play-icon">
        <img src={playbtn} alt="play button" />
      </div>
      <div className="movie-card-container">

        <div className="movie-card-text">
          {displayTextOnCard ?
            (<>
              <div className="movie-card-title">
                {movie.title ? movie.title.substring(0, 40) + '...' : 'Additional text goes here ...'}
              </div>
              <div className="movie-card-info">
                <div className="movie-card-year">
                  {movie.release_date ? movie.release_date.split('-')[0] : null}
                </div>
              </div>
            </>)
            : null}
          {/* <div className="movie-card-description">{movie.overview ? movie.overview.substring(0, TRUNCATE_LENGTH) + '...' : 'Additional text goes here ...'}</div> */}
        </div>
      </div>
    </div>
    {progressBar && <Progress value={70} themes={0} />}
    {!displayTextOnCard ? <div className="text-below">
      <div className="year">
        {movie.release_date ? movie.release_date.split('-')[0] : null}
      </div>
      {<div className="title">
        {movie.title ? movie.title.substring(0, 40) + '...' : 'Additional text goes here ...'}
      </div>}
    </div> : null}
  </div>
);

export { MovieCard };
