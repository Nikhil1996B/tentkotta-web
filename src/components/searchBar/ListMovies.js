import React from 'react';
import { MovieCard } from './MovieCard';
import { useSelector } from 'react-redux';
import pathOr from 'ramda/src/pathOr';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import LoadingSpinner from '../../UI_Frontendlib/atoms/loadingSpinner'
require('./style.scss');

const variants = ['h1', 'h3', 'body1', 'caption'];

function TypographyDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

const ListMovies = ({ movies, title }) => {
  const moviesRecord = useSelector(state => pathOr([], ['search', 'records', 'fetchedMovies'])(state));
  const loading = useSelector(state => pathOr(false, ['search', 'loading'])(state))

  return loading ? <LoadingSpinner /> : (
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
