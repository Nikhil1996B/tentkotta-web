import React, { useState } from 'react';
import { MovieCard } from './MovieCard';
import { useSelector } from 'react-redux';
import { jsx, css } from '@emotion/react';
// import facepaint from 'facepaint';
import pathOr from 'ramda/src/pathOr';
import LoadingSpinner from '../../UI_Frontendlib/atoms/loadingSpinner';
import Filter from '../Filters';
import SideNav from 'react-simple-sidenav';
import NavBarComponent from '../../components/searchBar/NavBar';
import { Container, Row, Col, Image } from 'react-bootstrap';
import filter from './assets/filter.svg';
require('./style.scss');

const variants = ['h1', 'h3', 'body1', 'caption'];

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const ListMovies = ({ movies, title }) => {
  const [showNav, setShowNav] = useState();
  const moviesRecord = useSelector(state => pathOr([], ['search', 'records', 'fetchedMovies'])(state));
  const loading = useSelector(state => pathOr(false, ['search', 'loading'])(state))

  if (!moviesRecord.length) {
    return (
      <div className="movie-list-container">
        <h1>
          No Results found. try with some other search criteria.
        </h1>
      </div>
    )
  }

  return loading ?
    <LoadingSpinner /> : (
      <>
        <style type="text/css">
          {`
              .filter-btn .img-thumbnail {
                border: none;
                background: transparent 0% 0% no-repeat padding-box;
                borderRadius: 5px;
              }
              `}
        </style>
        <div className="movie-list-container">
          <Container style={{ marginTop: '3%', marginLeft: '0' }}>
            <Row >
              <Col lg={10}>
                <NavBarComponent placeholder={'Search Movies, Cast Crew, Genre, Originals'} />
              </Col>
              <Col lg={2}>
                <Row className={'filter-btn'}>
                  <Image src={filter} thumbnail onClick={() => setShowNav(true)} />
                  <span style={{
                    fontSize: `36px`,
                    letterSpacing: `0.3px`,
                    paddingLeft: '4%',
                    color: `#FFFFFF`,

                  }}
                    css={{
                      [mq[0]]: {
                        fontSize: ''
                      }
                    }}
                  >
                    {'Filter'}
                  </span>
                </Row>
              </Col>
            </Row>
          </Container>
          <h1>{title}</h1>
          <div>
            <SideNav
              navStyle={
                {
                  minWidth: '50%',
                  minHeight: '100%',
                  height: 'auto',
                  backgroundColor: '#131722',
                  padding: '0 2%'
                }
              }
              showNav={showNav}
              onHideNav={() => setShowNav(false)}
              titleStyle={{ backgroundColor: '#4CAF50' }}
              itemStyle={{ backgroundColor: '#131722', padding: '0 2%' }}
              openFromRight={true}
              itemHoverStyle={{ backgroundColor: '#CDDC39' }}
            >
              <Filter />
            </SideNav>
          </div>
          <ol className="movie-list-grid">
            {moviesRecord && moviesRecord.map(movie => (
              <li key={movie.id}>
                <MovieCard
                  movie={movie}
                  displayTextOnCard={false}
                />
              </li>
            ))}
          </ol>
        </div>
      </>
    );

}



export default ListMovies;
