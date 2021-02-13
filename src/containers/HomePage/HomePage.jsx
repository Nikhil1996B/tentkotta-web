import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import SignupLoginModal from "../../components/Dialogs/SignupLoginModal";
import faceBookIcon from "../../assets/facebookButton.png";
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Hamburger from "../../assets/images/hamburger.png";
import Footer from '../../components/Footer/footer';
import MainHeader from '../../components/Header';
import AutoPlaySlider from '../../UI_Frontendlib/molecules/AutoPlaySlider'
import HeroBanner from '../../components/HeroBannerWithIcon/index'
import { GetContinueWatching, GetRecommendationCarosal } from '../VideoInfoPage/VideoInfoPage'
import { apiTokenActions } from "../../actions";
import { signinActions } from '../../components/Forms/SignIn/actions';
import { themeActions } from '../../actions/theme.action';
import LoadingSpinner from "../../UI_Frontendlib/atoms/loadingSpinner";
import { isSignedIn, deleteCookie } from '../../components/Forms/SignIn/authentication';
import { pathOr } from 'ramda';
import { ModalComponent } from './Modal.js';
import { CookiesConsent } from './CookieConsent';
import { ContentTraySection } from './ContentTraysSection';
import HomePageLayout from './HomePagelayout';
import { equals } from 'ramda';
// import continueWaching from '../VideoInfoPage/__mock/continuewatching'
// import continueWatchinghome from '../VideoInfoPage/__mock/continueWatchinghome'
// import moviesMock from '../VideoInfoPage/__mock/movies'

require('./HomePageStyle.scss')

function HomePage(props) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [show, setShow] = useState(false);
  const [showMoviesCategory, setShowMoviesCategory] = useState(false)
  const [Navshow, setNavShow] = useState(true);
  const [displayFullSideNav, setdisplayFullSideNav] = useState(true);
  const handleNavModal = () => setNavShow(!Navshow);
  const history = useHistory();
  const { email, password } = inputs;
  const { continueWaching, theme = undefined, displayAutoSlider } = props;

  // Configure Autoplay slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 10000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    display: true
  };
  const apiToken = pathOr('', ['apiToken'])(localStorage);
  const themes = useSelector(state => state.ThemeReducer);
  const themesLoading = useSelector(state => pathOr(false, ['ThemeReducer', 'loading'])(state))
  const reload = useSelector(state => pathOr('', ['SignInReducer', 'reload'])(state));

  const dispatch = useDispatch();

  // get api token if the jwt token is expired or does not exist on the load of page
  useEffect(() => {
    if (!themes._id) {
      dispatch(apiTokenActions.login());
      // dispatch(themeActions.themes());
    }
    // props.videoInfo();
  }, []);


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
    history.push('./signIn')
  }


  // Customize the layout ---> background color
  const bgColor = themes ? {
    backgroundColor: `${themes && themes.colors ? themes.colors.bgColor : ''}`
  } : {}

  const background = themes ? {
    background: '#131722',
    // backgroundColor: 'white'
  } : {}


  // Sign In status of user to be maintained along with the access token key to access resources in API
  // If the token key is expired or does not exisit for application to fetch resources, the make a API call.
  // Get the sign-in status of user for session
  const TIMER_MAX_LIMIT = useSelector(state => pathOr(3600, [
    'SignInReducer',
    'signInstatus',
    'expiresIn'])(state));

  const signInStatus =
    useSelector(state => pathOr(null, [
      'SignInReducer',
      'signInstatus',
      'responseCode'])(state));

  const refreshToken =
    useSelector(state => pathOr(null, ['SignInReducer', 'signInstatus', 'refreshToken'])(state));

  // Refresh the access token after epiration
  const [count, setCount] = React.useState(0);

  const tick = () => {
    //let newCount = count < 60 ? count + 1 : 0
    setCount((prevState) => prevState < TIMER_MAX_LIMIT ? prevState + 1 : TIMER_MAX_LIMIT);
  }

  React.useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  });

  React.useEffect(() => {
    if (count == TIMER_MAX_LIMIT && refreshToken) {
      dispatch(signinActions.rotateAccessTokenExpiration(refreshToken));
      setCount(0);
    }
  }, [count]);


  if (themesLoading) {
    return (<LoadingSpinner text={'Almost there!'} />)
  }

  return (
    <>
      <HomePageLayout />
      <CookiesConsent />
      <main className="home-background" style={background}>
        <header aria-label="main header section">
          <MainHeader
            Navshow={Navshow}
            handleNavModal={handleNavModal}
            themes={themes}
            handleSignInClick={handleSignInClick}
            btnTxt={isSignedIn ? 'Sign Out' : 'Sign In'}
            dispayBtn={isSignedIn ? false : true} />
        </header>

        {/* {
          <>
            <img src={Hamburger} alt="icon" className="icon" onClick={handleNavModal} />
            {displayFullSideNav && <FullSideNav
              show={Navshow}
              handleModal={handleNavModal}
              themes={themes}>
            </FullSideNav>}
          </>
        } */}

        <section aria-label="hero banner" className="bottom-marg">
          <HeroBanner />
        </section>

        {displayAutoSlider &&
          <section aria-label={'auto play slider'}>
            <AutoPlaySlider {...settings} />
          </section>
        }

        {showMoviesCategory &&
          <div className="darkgradient" style={bgColor}>
            {/* {continueWaching && <GetContinueWatching continueWaching={continueWaching} themes={themes} />} */}
            {/* {movies && <GetRecommendationCarosal title={'Popular'} movies={movies} />} */}
          </div>
        }
        <ContentTraySection />
        <ModalComponent />
      </main>
      <Footer />
    </>
  );
}

HomePage.propTypes = {
  movies: PropTypes.array,
  continueWatching: PropTypes.array
}

export default HomePage;
