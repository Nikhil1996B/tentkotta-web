import React, { Component, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Input, Avatar } from './index';
import ListMovies from './ListMovies';
import * as Movies from '../Carousel/api/Movies';
import { searchActions } from './actions';
import pathOr from "ramda/src/pathOr";

require('./style.scss');

export const NavBar = ({ onSearchMovies, onCollapseInputHandler, onExpandInputHandler, placeholder = "Search" }) => {

  const themes = useSelector(state => state.ThemeReducer);

  const { icons } = themes;
  const searchIcon = pathOr('', ['search'])(icons)

  return (
    <div className="navbar-container">
      <Input
        searchIcon={searchIcon}
        placeholder={placeholder}
        onEnterPressed={query => onSearchMovies(query)}
        onCollapseInputHandler={() => onCollapseInputHandler()}
        onExpandInputHandler={() => onExpandInputHandler()}
      />
    </div>
  );

}

const NavBarComponent = ({placeholder}) => {
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
        placeholder={placeholder}
      />
      {
        movieSearched ?
          <Route exact path='/*' render={() => {
            return <Redirect to="/search" />
          }
          } /> : null
      }
    </div>
  )
}

export default NavBarComponent;

