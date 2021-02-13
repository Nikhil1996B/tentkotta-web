import React from 'react';
import Title from './Title/title';
import Filter from './Filter/filter';
import MovieCard from './MovieCards/movie-card';
import { Container, Row, Col } from 'react-bootstrap';

export default function TrendingNowTray({
    title = 'Trending Now',
    trending = [],
    selectedGenere = '',
    breakpoint,
    dispatch,
    history,
    themes,
    icons,
    primBtCol,
    pFontClr,
    onFilterClick,
    filtertype,
}) {
    return (
        <Container>
            <Row>
                <Title breakpoint={breakpoint} title={title} />
                <Filter breakpoint={breakpoint} filtertype={filtertype} />
                <MovieCard breakpoint={breakpoint} trending={trending} />
            </Row>
        </Container>
    )
}
