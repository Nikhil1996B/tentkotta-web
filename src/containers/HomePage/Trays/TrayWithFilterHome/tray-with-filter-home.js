import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TrayWithFilter from '../../../../components/TrayComponentFilter/tray-with-filter-v1';
import { useMediaQuery } from '../../../../components/Header/viewportHook';
import { getByGenrer } from '../../../../components/Carousel/api/Movies';
import pathOr from "ramda/src/pathOr";
import { TrayWithFilterContext } from './tray-with-filter-context';


function TrayWithFilterWrapper() {
    return (
        <TrayWithFilterContext.Consumer>
            {
                ({
                    breakpoint,
                    dispatch,
                    history,
                    themes,
                    icons,
                    primBtCol,
                    pFontClr,
                    title,
                    traycontent,
                    filtertype,
                    handleFilterClick
                }) => (
                    <>
                        <TrayWithFilter
                            breakpoint={breakpoint}
                            dispatch={dispatch}
                            history={history}
                            themes={themes}
                            icons={icons}
                            primBtCol={primBtCol}
                            pFontClr={pFontClr}
                            title={title}
                            trending={traycontent}
                            filtertype={filtertype}
                            handleFilterClick={handleFilterClick}
                        />
                    </>
                )
            }
        </TrayWithFilterContext.Consumer>
    )
}


export default function TrayWithFilterHome() {

    // media query display
    const breakpoint = {
        sm: useMediaQuery('(max-width: 576px)'),
        md: useMediaQuery('(min-width: 768px)'),
        lg: useMediaQuery('(min-width:1200px)'),
        xl: useMediaQuery('(max-width: 1440px)')
    };


    // React redux dispatcher and selectors
    const dispatch = useDispatch();
    const history = useHistory();

    const themes = useSelector(state => pathOr(null, ['ThemeReducer'])(state));
    const traycontent = useSelector(state => pathOr([],
        ['homepageReducer', 'pagecontent', 'trendingmovies', 'records'])(state));
    const title = useSelector(state => pathOr('', ['homepageReducer', 'pagecontent', 'trendingmovies', 'title'])(state));
    const icons = pathOr('', ['icons'])(themes);
    const filtertype = useSelector(state => pathOr('', ['homepageReducer', 'pagecontent', 'trendingmovies', 'filters'])(state));
    // Destructure the theme props 
    const { bgColor, primaryBtnColor: primBtCol, primaryFontColor: pFontClr, secondaryFontColor: sFontClr } = pathOr({}, ['colors'], themes);

    const handleFilterClick = (value) => {
        getByGenrer(`${value}`).then(
            res => {
                dispatch({ type: 'HOME_PAGE_CONTENT', ...{ payload: res } })
            }
        );
    }
    const TrayWithFilterState = {
        breakpoint,
        dispatch,
        history,
        themes,
        icons,
        primBtCol,
        pFontClr,
        title,
        traycontent,
        filtertype,
        handleFilterClick
    };
    return (
        <TrayWithFilterContext.Provider value={TrayWithFilterState}>
            <TrayWithFilterWrapper />
        </TrayWithFilterContext.Provider>
    )
}