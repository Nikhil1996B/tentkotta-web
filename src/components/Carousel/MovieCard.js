import React from 'react';
import { useHistory } from 'react-router-dom';
import Progress from '../../UI_Frontendlib/atoms/linerprogress';
import HoverScreen from "./HoverScreen";
import Skeleton from '@material-ui/lab/Skeleton';
import playbtn from './icons/playbtn.png';
import { Link } from "react-router-dom";

require('./carousal.scss');

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';
const TRUNCATE_LENGTH = 100;


const MovieCard = ({ movie, style, progressBar = false, displayTextOnCard = false, displayHoverState = false, redirecturl }) => {
  const history = useHistory();
  const setPosition = (item) => {
    var x = document.getElementById(`1${item.id}`);
    var divItem = document.getElementById(`2${item.id}`);
    var count = 0;

    if (divItem && divItem) {
      divItem.style.position = "absolute";
      divItem.style.top = parseInt(x.offsetTop, 10) + "px";
      divItem.style.left = parseInt(x.offsetLeft, 10) + count * 800 + "px";
    }
    return divItem.style;
  };


  return (
    <div>
      <div
        className="movie-card"
        style={{
          backgroundColor: '#202020',
          backgroundImage: `url(${imageUrl}${size}${movie.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        onClick={() => {
          history.push(`contentdetails?id=${movie.id}`);
          // return window.location.pathname = `${redirecturl}`
        }}
      >
        {/* <div className="play-icon">
        <img src={playbtn} alt="play button" />
      </div> */}
        <div className="movie-card-container"
          id={`1${movie.id}`} onMouseEnter={() => {
            if (displayHoverState) {
              setPosition(movie);
            }
          }}>
          <div className="movie-card-text">
            {displayTextOnCard ?
              (<>
                <div className="movie-card-title">
                  {movie.title && movie.title.length > 20 ? movie.title.substring(0, 10) + '..' : movie.title}
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
        {displayHoverState && <div className="displayhoverScreen" id={`2${movie.id}`}>
          <HoverScreen
            item={movie}
            api_key={''}
            media_type={''}
            backgroundImage={`${imageUrl}${size}${movie.backdrop_path}`}
          />
        </div>
        }
      </div>
      {progressBar && <Progress value={70} themes={0} />}
      {
        !displayTextOnCard ? <div className="text-below">
          <div className="year">
            {
              movie.release_date ?
                movie.release_date.split('-')[0]
                : null
            }
          </div>
          {
            <div className="title">
              {movie.title && movie.title.length > 20 ? movie.title.substring(0, 10) + '..' : movie.title}
            </div>
          }
        </div> : null
      }
    </div>
  )
};

export { MovieCard };
