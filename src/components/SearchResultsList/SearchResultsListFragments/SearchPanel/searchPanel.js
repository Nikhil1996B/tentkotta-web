import React from 'react';
import { Col } from 'react-bootstrap';
import NavBarComponent from '../../../searchBar/NavBar';


export const SearchPanel = () => {
    return (
      <>
        <Col lg={10}>
          <NavBarComponent placeholder={'Search Movies, Cast Crew, Genre, Originals'} />
        </Col>
      </>
    )
  };
  