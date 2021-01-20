import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignupLoginModal from "../../components/Dialogs/SignupLoginModal";
import loginCompImage from "../../assets/logo.png";
import companyNameImage from "../../assets/companyName.png";
import faceBookIcon from "../../assets/facebookButton.png";
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Hamburger from "../../assets/images/hamburger.png";
import Footer from '../../components/Footer/footer'
import MainHeader from '../../components/Header'
import AutoPlaySlider from '../../UI_Frontendlib/molecules/AutoPlaySlider'
import HeroBanner from '../../components/HeroBannerWithIcon/index'
import { GetContinueWatching, GetRecommendationCarosal } from '../VideoInfoPage/VideoInfoPage'
import { apiTokenActions } from "../../actions";
import TrayComponentFilter from '../../components/TrayComponentFilter/trayComponent';
import TrayComponentText from '../../components/TrayComponentWithText/index';
import TrayComponent from '../../components/TrayComponent/index';
import TrendingNow from '../../components/TrendingComponent';


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
  const [Navshow, setNavShow] = useState(false);
  const [displayFullSideNav, setdisplayFullSideNav] = useState(false);
  const handleNavModal = () => setNavShow(!Navshow);
  const handleModal = () => setShow(true);

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
  const themes = useSelector(state => state.ThemeReducer);

  const dispatch = useDispatch();
  //get api token
  useEffect(() => {
    if (!themes._id) {
      dispatch(apiTokenActions.login());

    }
    props.videoInfo();
  }, [dispatch, themes]);

  const bgColor = themes ? {
    backgroundColor: `${themes && themes.colors ? themes.colors.bgColor : ''}`
  } : {}
  const background = themes ? {
    background: '#131722',
    // backgroundColor: 'white'
  } : {}
  return (
    <>
      <div className="home-background" style={background}>
        {displayFullSideNav && <FullSideNav show={Navshow} handleModal={handleNavModal} themes={themes}></FullSideNav>}
        <MainHeader Navshow={Navshow} handleNavModal={handleNavModal} themes={themes} />
        <HeroBanner />
        {displayAutoSlider && <AutoPlaySlider {...settings} />}
        {showMoviesCategory && <div className="darkgradient" style={bgColor}>
          {continueWaching && <GetContinueWatching continueWaching={continueWaching} themes={themes} />}
          {/* {movies && <GetRecommendationCarosal title={'Popular'} movies={movies} />} */}
        </div>}

        {<TrayComponent title={'Continue watching'} progressBar={true} style={{}} displayTextOnCard={true} />}
        {<TrayComponent title={'New Releases'} style={{}} displayTextOnCard={true} />}
        {<TrendingNow title={"Trending Movies"} className={{}} />}
        <TrayComponentText title={''} />
        {
          <TrayComponentFilter title={'2020 top Movies'} />
        }

        {show && <div> <Button variant="warning" onClick={handleModal}>
          Login
        </Button>
        </div>}

        <Modal className="modal-style" centered show={show} >
          <Modal.Header>
          </Modal.Header>
          <Modal.Body>
            <div className="logo-div">
              <img
                src={loginCompImage}
                alt="login"
              />{" "}

            </div>
            <div className="company-name">
              <img
                src={companyNameImage}
                alt="company-name"
              />{" "}
            </div>
            <div className="heading">Login or Create account</div>
            <form name="form" >
              <div className="form-group">
                <div className="form-email">EMAIL</div>
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  value
                  className="login-input"
                />

              </div>
            </form>{" "}
            <div className="btn-group">
              <button className="login-button">
                <div className="login-button-text">CONTINUE</div>
              </button>
              {/*<div className="signup-cont mt-5">
              New here? Please
              <Link onClick={handleShow} className="btn signup-button">
                Sign up
              </Link>
            </div>*/}
            </div>
            <div className="social-login"><h2><span>Social login</span></h2></div>
            <div className="social-img">
              <img className="fb-icon"
                src={''}
                alt="fb"
                width="75px"
              />{" "}
            </div>
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </>
  );
}

HomePage.propTypes = {
  movies: PropTypes.array,
  continueWatching: PropTypes.array
}

export default HomePage;
