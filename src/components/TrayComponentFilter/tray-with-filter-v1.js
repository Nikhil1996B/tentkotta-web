import React from 'react';
import Home from '../Carousel/Home';
import Filter from './Filter/filter';
import Title from './Title/title';
import CardSection from './CardSection/cardsection';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { pathOr } from 'ramda';
import { useMediaQuery } from '../../components/Header/viewportHook';
import { TrayFilterGlobalStyle } from './tray-with-filter-style';


export default function TrayWithFilter({
    title = 'New Movies',
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
    const sm = pathOr('', ['sm'])(breakpoint);
    return (
        <>
            <TrayFilterGlobalStyle />
            <div className="tray-with-filter">
                <div className="carousalWrapper">
                    <Row style={{}}>
                        <Title
                            breakpoint={breakpoint}
                            title={title} />
                        <Filter breakpoint={breakpoint}
                            filtertype={filtertype}
                            handleFilterClick={handleFilterClick} />
                    </Row>
                </div>
            </div>
            <>
                <div className="tray-with-filter">
                    <div className="carousalWrapper" id="carousal-filter">
                        <CardSection trending={trending} displayCard={sm} redirecturl={'/movies'} />
                    </div>
                </div>
            </>
        </>
    )
}
