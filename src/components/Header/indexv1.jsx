import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { jsx, css } from '@emotion/react';
import Search from '../../UI_Frontendlib/molecules/Search';
import { useMediaQuery } from './viewportHook';
import { pathOr } from 'ramda';
import NavBarComponent from '../searchBar/NavBar';
import { isSignedIn, getCookie, deleteCookie } from '../Forms/SignIn/authentication';
import { HeaderContext } from './header-context';
import Brandlogo from './HeaderFragments/BrandLogo/brandlogo';
import Category from './HeaderFragments/Categories/Category';
import SearchForm from './HeaderFragments/SearchFormControl/searchform';
import { NavBarStyle } from './header-style';
import logotent from './assets/logotent.png';
import profile from './assets/profile.svg';
import { signinActions } from '../Forms/SignIn/actions';

// import react-bootstrap components
import { Container, Row, Col, Navbar, Image } from 'react-bootstrap';


export default function HeaderComp() {
    // media query display
    const breakpoint = {
        sm: useMediaQuery('(min-width: 576px)'),
        md: useMediaQuery('(min-width: 768px)'),
        lg: useMediaQuery('(min-width:1200px')
    };

    // React redux dispatcher and selectors
    const dispatch = useDispatch();
    const history = useHistory();
    // State Selectors
    const usernameCookie = getCookie('username');
    const themes = useSelector(state => pathOr(null, ['ThemeReducer'])(state));
    const themename = pathOr('default', ['themeName'])(themes);
    const emailAddress = useSelector(state => pathOr(usernameCookie ? usernameCookie : '',
        ['SignInReducer', 'emailaddress', 'username'])
        (state));

    // header layout
    const headerLayout = pathOr({}, ['layout', 'header'], themes);
    const { bgColor: headerbgclr } = headerLayout;

    // logo - currying technique
    const logo = pathOr('', ['logoImg'])(themes);
    // const displayLogo = pathOr(false, ['logo'])(headerLayout);
    const account = pathOr('', ['icons', 'account'])(themes);
    const icons = pathOr('', ['icons'])(themes);
    // Destructure the theme props 
    const { bgColor, primaryBtnColor: primBtCol, primaryFontColor: pFontClr, secondaryFontColor: sFontClr } = pathOr({}, ['colors'], themes);

    // Handle the signin/signout button click
    const handleClick = () => {
        return console.log('called');
    }

    // Avatar icon click 
    const [show, setShow] = useState(false);
    const reload = useSelector(state => pathOr('', ['SignInReducer', 'reload'])(state));


    // Sign In navigator or Sign out action
    const handleSignInClick = () => {
        if (isSignedIn) {
            dispatch(signinActions.signout());
            dispatch(signinActions.resetSignInParams());
            deleteCookie('signInStatus');
            deleteCookie('username');

            window.location.reload();
            if (reload) {
                dispatch({ type: "RESET_RELOAD_STATUS" })
            }
        }
        dispatch(signinActions.resetSignInParams());
        history.push('./signIn');
    }


    const HeaderContextState = {
        logotent,
        logo,
        themes,
        themename,
        usernameCookie,
        breakpoint,
        handleSignInClick,
        emailAddress,
        isSignedIn,
        dispatch,
        history,
        icons,
        category: {
            style: `${pFontClr}`
        },
        button: {
            style: `${primBtCol}`
        },
        profile,
        setShow,
        show
    }
    return (
        <HeaderContext.Provider value={HeaderContextState}>
            <Navbar varient={"dark"} style={NavBarStyle(headerbgclr)} expand={true}>
                <Brandlogo />
                <Category />
                <SearchForm />
            </Navbar>
        </HeaderContext.Provider>
    )
}
