import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import pathOr from "ramda/src/pathOr";
import equals from "ramda/src/equals";
import { getByGenrer } from '../../../../components/Carousel/api/Movies';
import { TrendingTrayContext } from './trending-now-context';
import TrendingNowTray from '../../../../components/TrendingComponent/indexv1';
import { useMediaQuery } from '../../../../components/Header/viewportHook';

export const TrendingNowTrayConsumer = () => {
    return (
        <TrendingTrayContext.Consumer>
            {
                ({ breakpoint,
                    dispatch,
                    history,
                    themes,
                    icons,
                    primBtCol,
                    pFontClr,
                    title,
                    filtertype,
                    trending,
                    handleFilterClick
                }) => (
                    <>
                        <TrendingNowTray
                            breakpoint={breakpoint}
                            dispatch={dispatch}
                            history={history}
                            themes={themes}
                            icons={icons}
                            primBtCol={primBtCol}
                            pFontClr={pFontClr}
                            title={title}
                            filtertype={filtertype}
                            trending={trending}
                            handleFilterClick={handleFilterClick}
                        />
                    </>
                )
            }
        </TrendingTrayContext.Consumer>
    )
}


export default function TrendingNowTrayHome() {
    // media query display
    const breakpoint = {
        sm: useMediaQuery('(max-width: 576px)'),
        md: useMediaQuery('(min-width: 768px)'),
        lg: useMediaQuery('(min-width:1200px)'),
        xl: useMediaQuery('(min-width: 1440px)'),
        xxl: useMediaQuery('(min-width:2000px)')
    };


    // React redux dispatcher and selectors
    const dispatch = useDispatch();
    const history = useHistory();

    const themes = useSelector(state => pathOr(null, ['ThemeReducer'])(state));
    const trending = useSelector(state => pathOr([],
        ['homepageReducer', 'pagecontent', 'trendingmovies', 'records'])(state));
    const title = useSelector(state => pathOr('', ['homepageReducer', 'pagecontent', 'trendingmovies', 'title'])(state));
    const filtertype = useSelector(state => pathOr('', ['homepageReducer', 'pagecontent', 'trendingmovies', 'filters'])(state));
    const icons = pathOr('', ['icons'])(themes);
    // Destructure the theme props 
    const { bgColor, primaryBtnColor: primBtCol, primaryFontColor: pFontClr, secondaryFontColor: sFontClr } = pathOr({}, ['colors'], themes);

    const handleFilterClick = (value) => {
        getByGenrer(`${value}`).then(
            res => {
                dispatch({ type: 'HOME_PAGE_CONTENT', ...{ payload: res } })
            }
        );
    }

    const TrendingNowState = {
        breakpoint,
        dispatch,
        history,
        themes,
        icons,
        primBtCol,
        pFontClr,
        title,
        filtertype,
        trending,
        handleFilterClick
    };


    return (
        <TrendingTrayContext.Provider value={TrendingNowState}>
            <TrendingNowTrayConsumer />
        </TrendingTrayContext.Provider>
    )
};
