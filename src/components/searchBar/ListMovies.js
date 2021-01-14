import React from 'react';
import { MovieCard } from './MovieCard';
import { useSelector } from 'react-redux';
import pathOr from 'ramda/src/pathOr'

require('./style.scss');

const ListMovies = ({ movies, title }) => {
  const moviesRecord = useSelector(state => pathOr([], ['search', 'records', 'fetchedMovies'])(state));
  console.log(moviesRecord)
  return (
    <div className="movie-list-container">
      <h1>{title}</h1>
      <ol className="movie-list-grid">
        {moviesRecord && moviesRecord.map(movie => (
          <li key={movie.id}>
            <MovieCard
              movie={movie}
            />
          </li>
        ))}
      </ol>
    </div>
  );

}



export default ListMovies;
