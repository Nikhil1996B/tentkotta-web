import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Carosal from "../../components/Carousel";
import PropTypes from 'prop-types';
import Hamburger from "../../assets/images/hamburger.png";
import Slider from '../../UI_Frontendlib/molecules/Slider';
import Search from '../../UI_Frontendlib/molecules/Search';
import TrayComponent from '../../components/TrayComponent/index';
import HeroBanner from '../../components/HeroBanner';
import MainHeader from '../../components/Header';
import Footer from '../../components/Footer/footer';
import { signinActions } from '../../components/Forms/SignIn/actions';
import './VideoInfoPage.scss';
import ErrorBoundary from './ErrorBoundary';
import { isSignedIn, deleteCookie } from '../../components/Forms/SignIn/authentication';

export const Header = () => {
    const configSearch = {
        placeholder: 'Search',
        display: true
    }
    return (
        <div data-test="headerComponent">
            <Search {...configSearch} />
        </div>
    )
}

const HeaderSahdow = ({ Navshow, handleNavModal, themes }) => {
    const headerBgColor = themes ? {
        backgroundColor: `${themes && themes.colors ? themes.colors.bgColor : ''}`
    } : {}
    const primaryBtnColor = themes ? {
        background: `${themes && themes.colors ? themes.colors.primaryBtnColor : ''}`
    } : {}
    return (
        <div className="headerShadow" style={headerBgColor}>
            <SideNav ></SideNav>
            <img src={Hamburger} alt="icon" className="icon" onClick={handleNavModal} />
            <div className="right-navsection">
                <Header />
                <button className="upgrade" style={primaryBtnColor}>Upgrade</button>
            </div>
            <FullSideNav show={Navshow} handleModal={handleNavModal} themes={themes}></FullSideNav>
        </div>
    )
}

export const GetCardsCarosal = ({ title = 'Cast', cast = [] }) => {
    return (
        <section aria-label="cast carosal section">
            <p className={"carosal-title"}>{title}</p>
            <ErrorBoundary>
                <Slider>
                    {cast.map(cast => (
                        <Slider.Item movie={cast} key={cast.id}>item1</Slider.Item>
                    ))}
                </Slider>
            </ErrorBoundary>
        </section>
    )
}

export const GetRecommendationCarosal = ({ movies = [], title = "You may also like" }) => {
    return (
        <section aria-label="recommendation carosal section">
            <p className={"carosal-title"}>{title}</p>
            <Slider>
                {movies.map(movie => (
                    <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                ))}
            </Slider>
        </section>
    )
}

export const GetContinueWatching = ({ continueWaching = [], title = "Continue watching", themes }) => {
    return (
        <section aria-label="recommendation carosal section">
            <p className={"carosal-title"}>{title}</p>
            <Slider>
                {continueWaching.map(continueWaching => (
                    <Slider.Item movie={continueWaching} key={continueWaching.id} themes={themes}>item1</Slider.Item>
                ))}
            </Slider>
        </section>
    )
}

export default function VideoInfoPage(props) {
    const { cast, movies, continueWaching } = props;
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const themes = useSelector(state => state.ThemeReducer);

    // React redux hooks
    const dispatch = useDispatch();
    const history = useHistory();


    // TODO - replace the useEffect side effect with the redux flow design when it is to be rendered on page
    useEffect(() => {
        props.videoInfo();
    }, []);

    // Sign In navigator or Sign out action
    const handleSignInClick = () => {
        if (isSignedIn) {
            dispatch(signinActions.signout());
            dispatch(signinActions.resetSignInParams());
            deleteCookie('signInStatus');
            deleteCookie('username');
            window.location.pathname = '/';
        }
        dispatch(signinActions.resetSignInParams());
        history.push('./signIn')
    }

    return (
        <ErrorBoundary>
            <div className="page-background videoinfo-page-background" data-test='VideoInfoPage'>
                <header aria-label="main header section">
                    <MainHeader
                        themes={themes}
                        handleSignInClick={handleSignInClick}
                        btnTxt={isSignedIn ? 'Sign Out' : 'Sign In'}
                        dispayBtn={false}
                    />
                </header>
                <section aria-label="hero banner" className="bannerWrapper">
                    <HeroBanner themes={themes} />
                </section>
                {
                    cast &&
                    <GetCardsCarosal
                        cast={cast}
                        data-test='castCarosalComponent'
                    />
                }
                {
                    continueWaching &&
                    <GetContinueWatching
                        continueWaching={continueWaching}
                        data-test='continueWarchingComponent'
                    />
                }
                {
                    movies &&
                    <GetRecommendationCarosal
                        movies={movies}
                        data-test='recommededMoviesComponent'
                    />
                }
                {/* {
                    <section aria-label="new release horzontal slider" className="videoInfoCarousal">
                        <TrayComponent
                            title={'Continue watching'}
                            style={{}}
                            displayTextOnCard={false}
                            progressBar={true}
                        />
                    </section>
                }
                {
                    <section aria-label="new release horzontal slider" className="videoInfoCarousal">
                        <TrayComponent
                            title={'New Releases'}
                            style={{}}
                            displayTextOnCard={true}
                        />
                    </section>
                } */}
            </div>
            <Footer />
        </ErrorBoundary>
    )
}

VideoInfoPage.propTypes = {
    cast: PropTypes.array,
    continueWaching: PropTypes.array,
    movies: PropTypes.array
}
