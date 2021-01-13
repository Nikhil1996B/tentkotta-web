import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import Progress from '../../atoms/linerprogress'
import { Redirect } from 'react-router-dom';
import VideoPreview from '../previewVideoPlayer'
require('./Item.scss')

const Item = ({ movie, themes }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;
      return (
        <div
          ref={elementRef}
          className={`${cx('item', {
            'item--open': isActive,
          })} `}
          onClick={() => {
            if (movie.showDetails) onSelectSlide(movie);
            if (movie.movieInfo) return window.location.pathname = '/videoInfo';
          }
          }
        >
          {/* <div className="hoverDiv" />
          <div className="info">
            <VideoPreview />
          </div> */}
          <img src={movie.image} alt="" />
          {movie.progress && <div>
            <Progress value={movie.progress} themes={themes} />
          </div>}
          {(movie.title && <p className="title">{movie.title}</p>)}
          {movie.showDetails && <ShowDetailsButton onClick={() => onSelectSlide(movie)} />}
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer >
);

export default Item;
