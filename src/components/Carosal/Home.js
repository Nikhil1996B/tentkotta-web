import React from 'react';
import { Carousel } from './Carousel';
import { MovieCard } from './MovieCard';
import pathOr from "ramda/src/pathOr";


const Home = ({ movies, title, style, displayCard, progressBar }) => {
  const filterMovies = pathOr([], ['animationMovies'])(movies)
  return <div className="home-container">
    <Carousel title={title} style={style} displayCard={displayCard}>
      {filterMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          progressBar={progressBar}
        />
      ))}
    </Carousel>
  </div>
}


export default Home;
