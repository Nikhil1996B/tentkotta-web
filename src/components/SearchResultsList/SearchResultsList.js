import React, { useState } from 'react';
import { MovieCard } from '../searchBar/MovieCard';
import { useSelector } from 'react-redux';
import { jsx, css } from '@emotion/react';
// import facepaint from 'facepaint';
import pathOr from 'ramda/src/pathOr';
import LoadingSpinner from '../../UI_Frontendlib/atoms/loadingSpinner';
import { SearchPanel } from './SearchResultsListFragments/SearchPanel/searchPanel';
import { FilterSidenavBar } from './SearchResultsListFragments/filtersidenav/filtersidenav';
import { ResultsList } from './SearchResultsListFragments/ResultsList/resultslist';
import Title from './SearchResultsListFragments/Title/title';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ListMovieGlobalStyle } from './listmoviesstyle';
import { SearchResultsListLayout } from './SearchResultsLayout';
// require('./style.scss');

const variants = ['h1', 'h3', 'body1', 'caption'];


const SearchResultsList = ({ movies, title }) => {
  const loading = useSelector(state => pathOr(false, ['search', 'loading'])(state))

  return loading ?
    <LoadingSpinner /> : (
      <>
        <ListMovieGlobalStyle />
        <SearchResultsListLayout />
        <div className="movie-list-container">
          <Container style={{ marginTop: '3%' }}>
            <Row >
              <SearchPanel />
              <FilterSidenavBar />
            </Row>
          </Container>
          <Container>
            <Row>
              <Title title={title} />
            </Row>
            <Row>
              <ResultsList />
            </Row>
          </Container>
        </div>
      </>
    );

}

export default SearchResultsList;
