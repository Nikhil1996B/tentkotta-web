import React, { useState, useEffect } from 'react';
import poster from './assets/masterPoster.jpg';
import { useSelector } from 'react-redux';
import pathOr from "ramda/src/pathOr";
import equals from "ramda/src/equals";
import { HeroBanner } from './hero-banner-context';
import { useMediaQuery } from '../Header/viewportHook';
import CustomizedInputBase from "./subscriptionForm";
import JumbotronComp from './HeroBannerFragment/JumboTron/jumbotron';
import { isSignedIn, getCookie, deleteCookie } from '../Forms/SignIn/authentication';

import play from './assets/play.svg';
import plus from './assets/plus.svg';

export const HeroBannerText = () => {
    const [subscribed, setSubscribed] = useState(true);
    const [movieDetails, setShowMovieDetails] = useState(false);
    const [moviePreviewAvailable, setPreviewAvailable] = useState(true);
    const themes = useSelector(state => pathOr(null, ['ThemeReducer'])(state));

    const { icons } = themes
    const playicon = pathOr('', ['playBtn'])(icons);
    // Destructure the theme props 
    const { bgColor, primaryBtnColor: primBtCol, primaryFontColor: pFontClr, secondaryFontColor: sFontClr } = pathOr({}, ['colors'], themes);


    // media query display
    const breakpoint = {
        sm: useMediaQuery('(max-width: 576px)'),
        md: useMediaQuery('(min-width: 768px)'),
        lg: useMediaQuery('(min-width:1200px)')
    };


    const handleClick = () => {
        if (isSignedIn) {
            return window.location.pathname = '/player';
        }
        return window.location.pathname = '/signIn';
    }

    const HeroBannerState = {
        themes,
        subscribed,
        isSignedIn,
        icons,
        handleClick,
        url: 'https://1.bp.blogspot.com/-hJtTiGMJ1rc/Xp8_CUGH8BI/AAAAAAAAAyg/799Mw2ZodPAF2xLXOaGsF7uf0wLihfPmgCLcBGAsYHQ/s1600/49669442602_846bbd82ba_k.jpg',
        plus,
        play,
        breakpoint
    }

    return (
        <HeroBanner.Provider value={HeroBannerState}>
            <JumbotronComp />
        </HeroBanner.Provider>
    );
}