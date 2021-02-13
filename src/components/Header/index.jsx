import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import Search from '../../UI_Frontendlib/molecules/Search';
import { useMediaQuery } from './viewportHook';
import pathOr from "ramda/src/pathOr";
import equals from "ramda/src/equals";
import NavBarComponent from '../../components/searchBar/NavBar';
import { isSignedIn, signedIn, getCookie } from "../Forms/SignIn/authentication";
import logotent from './assets/logotent.png';
import profile from './assets/profile.svg';
require('./style.scss')


// themes specific style selectors 
// If for a specific tenent , who is onboarded on the platform needs customization to css
// we can use the following to do the same
// use when the positioning, gradinence of components needs to be modified
//
//
// Note: this is provided the markup is the same
const classSelector = (themeName = 'tentKotta', type = "btn") => {
    const themes = {
        'tentKotta': {
            fontWeight: type == 'btn' ? '100' : ''
        },
        'dorm': {}
    }
    return themes[themeName]
}



// Main header component

const MainHeader = (
    { btnTxt = 'Sign In',
        signedIn = false,
        searchVisibilty = true,
        handleSignInClick,
        dispayBtn = true }) => {

    // media query display
    const display = useMediaQuery('(min-width: 768px)');
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    // Sector for themes
    const usernameCookie = getCookie('username');
    const themes = useSelector(state => state.ThemeReducer)
    const emailAddress = useSelector(state => pathOr(usernameCookie ? usernameCookie : '',
        ['SignInReducer', 'emailaddress', 'username'])
        (state));

    // header layout
    const headerLayout = pathOr({}, ['layout', 'header'], themes)


    // logo - currying technique
    const logo = pathOr('', ['logoImg'])(themes)
    // const displayLogo = pathOr(false, ['logo'])(headerLayout)
    const account = pathOr('', ['icons', 'account'])(themes)

    const { bgColor, primaryBtnColor: primBtCol, primaryFontColor: pFontClr, secondaryFontColor: sFontClr } = pathOr({}, ['colors'], themes)

    // const signedInStatus = useSelector(state => pathOr('', ['SignInReducer', 'signInstatus', 'responseCode'])(state));
    // const isSignedIn = equals(200, signedInStatus);

    // Avatar icon click 
    const [show, setShow] = useState(false);

    // Modal state management

    // styles for resizing, controls on display of element/ block different viewports using custom hooks
    const styles = {
        display: toDisplay => ({
            display: toDisplay ? 'none' : ''
        }),
        logo: position => ({
            padding: position ? "0px" : ''
        }),
        width: (width, height) => ({
            width: `${width}`,
            heigth: ''
        })
    };

    // custom style composer
    const headerBgColor = bgColor ? {
        backgroundColor: `${bgColor && bgColor.colors ? bgColor.color.value : ''}`,
        opacity: headerLayout && headerLayout.web_header_type == 'transparent'
            ? '0.7' : '1',
    } : {}
    const primaryBtColor = primBtCol ? {
        background: primBtCol.type == 'linearGradient' ?
            `linear-gradient(${primBtCol.color.degree},${primBtCol.color.start},${primBtCol.color.end})`
            : `${primBtCol && primBtCol.color ? primBtCol.color.value : ''}`,
        color: pFontClr.type == 'linearGradient' ?
            `linear-gradient(${pFontClr.color.degree},${pFontClr.color.start},${pFontClr.color.end})`
            : `${pFontClr && pFontClr.color ? pFontClr.color.value : ''}`,
    } : {}


    return (
        <>
            {
                <a href="/">
                    <img
                        src={logotent}
                        // src={logo}
                        // srcset={`${logo} 375w,
                        // ${logo} 1500w`}
                        alt="tentkotta logo"
                        sizes="(min-width: 400px) 80vw, 100vw"
                        className={'header-logo'}
                        style={{ ...styles.logo(display) }}
                    />
                </a>
            }
            <div className="headerShadow" style={{ ...headerBgColor, ...classSelector('', 'header') }}>
            </div >
            <div className="right-navsection">
                {searchVisibilty && <NavBarComponent />}
                <Header />
                {btnTxt && dispayBtn &&
                    < button className="upgrade"
                        style={{ ...primaryBtColor, ...styles.display(display) }}
                        onClick={handleSignInClick}
                    >
                        {btnTxt}
                    </button>
                }
                {
                    isSignedIn &&
                    <>
                        <img
                            src={profile}
                            // src={account} 
                            alt="signed-in avatar" style={{ height: '44px', width: '44px' }} id="signedIn"
                            onClick={() => setShow(!show)} />
                        {
                            show
                                ? <div className="bottom">
                                    <div id="overlay-example" >
                                        <div className="tooltipWrapper">
                                            <div style={{
                                                textAlign: "center"
                                            }}>
                                                <img
                                                    src={profile}
                                                    // src={account} 
                                                    alt="signed-in avatar" style={{ height: '44px', width: '44px' }}
                                                    id="signedIn"
                                                />
                                                <p className={'user-name'}>{emailAddress}</p>
                                            </div>
                                            <div className={'status-wrapper'}>
                                                <p className="logouthover">My Account</p>
                                                <p onClick={
                                                    () => {
                                                        handleSignInClick();
                                                        setShow(true)
                                                    }} className="logouthover signout">
                                                    Sign Out
                                                 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </>

                }
            </div>
        </>
    )
}


export const Header = ({ showSearchBar = true }) => {
    const configSearch = {
        placeholder: 'Search',
        display: true
    }
    return (
        showSearchBar &&
        <section data-test="headerComponent">
            {/* <Search {...configSearch} /> */}
        </section>
    )
}


export default MainHeader;  