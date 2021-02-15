import React from 'react';
import { Carousel } from './Carousel';
import { MovieCard } from './MovieCard';
import pathOr from "ramda/src/pathOr";
import HoverScreen from "./HoverScreen";

const CarousalState = React.createContext();

const Home = ({ movies, title, style, displayCard, progressBar, displayTextOnCard, displayHoverState, redirecturl }) => {
  const filterMovies = movies ? movies : '';
  return (<div className="home-container">
    <Carousel title={title} style={style} displayCard={displayCard}>
      {filterMovies && filterMovies.map(movie => (
        <MovieCard
          displayTextOnCard={displayTextOnCard}
          key={movie.id}
          movie={movie}
          progressBar={progressBar}
          displayHoverState={displayHoverState}
          redirecturl={redirecturl}
        />
      ))}
    </Carousel>
  </div>)
}


export default Home;
