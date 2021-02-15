import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TrayWithTextContext } from './tray-with-title-context.js';
import TrayWithTitle from '../../../../components/TrayComponent/indexv1';
import { useMediaQuery } from '../../../../components/Header/viewportHook';
import pathOr from "ramda/src/pathOr";
import equals from "ramda/src/equals";


export const TrayWithTextConsumer = () => {
    return (
        <TrayWithTextContext.Consumer>
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
                }) => (
                    <>
                        <TrayWithTitle
                            breakpoint={breakpoint}
                            dispatch={dispatch}
                            history={history}
                            themes={themes}
                            icons={icons}
                            primBtCol={primBtCol}
                            pFontClr={pFontClr}
                            title={title}
                            traycontent={traycontent}
                        />
                    </>
                )
            }
        </TrayWithTextContext.Consumer>
    )
}

export default function TrayWithTitleHome() {
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
    // Destructure the theme props 
    const { bgColor, primaryBtnColor: primBtCol, primaryFontColor: pFontClr, secondaryFontColor: sFontClr } = pathOr({}, ['colors'], themes);


    const TrayWithTextState = {
        breakpoint,
        dispatch,
        history,
        themes,
        icons,
        primBtCol,
        pFontClr,
        title,
        traycontent,
    };

    return (
        <TrayWithTextContext.Provider value={TrayWithTextState}>
            <TrayWithTextConsumer />
        </TrayWithTextContext.Provider>
    )
}   