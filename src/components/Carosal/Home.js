import React from 'react';
import { Carousel } from './Carousel';
import { MovieCard } from './MovieCard';
import pathOr from "ramda/src/pathOr";


const Home = ({ movies, title, style, displayCard }) => {
  const filterMovies = pathOr([], ['animationMovies'])(movies)
  return <div className="home-container">
    <Carousel title={title} style={style} displayCard={displayCard}>
      {filterMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </Carousel>
  </div>
}


export default Home;
