import React, { Component, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Input, Avatar } from './index';
import ListMovies from './ListMovies';
import * as Movies from '../../components/Carosal/api/Movies';
import { searchActions } from './actions';
require('./style.scss');

export const NavBar = ({ onSearchMovies, onCollapseInputHandler, onExpandInputHandler }) => {

  return (
    <div className="navbar-container">
      <Input
        placeholder="Movies..."
        onEnterPressed={query => onSearchMovies(query)}
        onCollapseInputHandler={() => onCollapseInputHandler()}
        onExpandInputHandler={() => onExpandInputHandler()}
      />
    </div>
  );

}

const NavBarComponent = () => {
  const [fetchedMovies, setfetchedMovies] = useState([]);
  const [isInputClosed, setInputClosed] = useState(true);
  const [avatarPhoto, setAvatarPhoto] = useState('');
  const [movieSearched, setMovieSeached] = useState(false);
  const dispatch = useDispatch();

  const doSearch = query => {
    Movies.search(query).then(res => {
      setfetchedMovies([...res]);
      setMovieSeached(true)

    });
    dispatch(searchActions.SearchReq(query))
  }

  return (
    <div>
      <NavBar
        onSearchMovies={query => doSearch(query)}
        onCollapseInputHandler={() => setInputClosed(true)}
        onExpandInputHandler={() => setAvatarPhoto(false)}
      />
      {
        movieSearched ?
          <Route exact path='/' render={() => {
            return <Redirect to="/search" />
          }
          } /> : null
      }
    </div>
  )
}

export default NavBarComponent;

