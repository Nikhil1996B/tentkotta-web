import React from 'react'
import { useSelector } from 'react-redux'
import Search from '../../UI_Frontendlib/molecules/Search';
import { useMediaQuery } from './viewportHook';
import pathOr from "ramda/src/pathOr";


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

const MainHeader = ({ btnTxt = 'Sign In' }) => {

    // media query display
    const display = useMediaQuery('(min-width: 768px)');

    // Sector for themes
    const themes = useSelector(state => state.ThemeReducer)

    // header layout
    const headerLayout = pathOr({}, ['layout', 'header'], themes)


    // logo - currying technique
    const logo = pathOr('', ['logoImg'])(themes)
    const displayLogo = pathOr(false, ['logo'])(headerLayout)

    const { bgColor, primaryBtnColor: primBtCol, primaryFontColor: pFontClr, secondaryFontColor: sFontClr } = pathOr({}, ['colors'], themes)


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

            <div className="headerShadow" style={{ ...headerBgColor, ...classSelector('tentKotta', 'header') }}>
                {displayLogo && <img
                    src={logo}
                    //         srcset={`${logo} 375w,
                    // ${logo} 1500w`}
                    alt="tentkotta logo"
                    sizes="(min-width: 400px) 80vw, 100vw"
                    className={'header-logo'} style={{ ...styles.logo(display), ...styles.width('55px') }} />}
                <div className="right-navsection">
                    <Header />
                    {btnTxt && < button className="upgrade" style={{ ...primaryBtColor, ...styles.display(display) }}>{btnTxt}</button>}
                </div>
            </div >

        </>
    )
}

export const Header = ({ showSearchBar = false }) => {
    const configSearch = {
        placeholder: 'Search',
        display: true
    }
    return (
        showSearchBar && <div data-test="headerComponent">
            <Search {...configSearch} />
        </div>
    )
}


export default MainHeader