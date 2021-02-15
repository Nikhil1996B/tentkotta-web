import React from 'react';
import { pathOr } from 'ramda';
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
    handleFilterClick
}) {
    const xl = pathOr('', ['xl'])(breakpoint);
    const xxl = pathOr('', ['xxl'])(breakpoint);

    return (
        <Container style={{ maxWidth: `${xl ? '1989' : ''}px`, marginLeft: `${xl ? 2 : ''}rem`, marginBottom: '3rem' }}>
            <Row>
                <Title
                    breakpoint={breakpoint}
                    title={title} />
                <Filter
                    breakpoint={breakpoint}
                    filtertype={filtertype}
                    handleFilterClick={handleFilterClick} />
                <MovieCard
                    breakpoint={breakpoint}
                    trending={trending} />
            </Row>
        </Container>
    )
}
