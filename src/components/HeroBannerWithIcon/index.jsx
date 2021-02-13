import React, { useState } from 'react';
import poster from './assets/masterPoster.jpg';
import { useSelector } from 'react-redux';
import pathOr from "ramda/src/pathOr";
import equals from "ramda/src/equals";
import { Route, Redirect } from 'react-router-dom';
import { useMediaQuery } from '../Header/viewportHook';
import CustomizedInputBase from "./subscriptionForm";
import VideoPreview from '../../UI_Frontendlib/molecules/previewVideoPlayer';
import play from './assets/play.svg';
import plus from './assets/plus.svg';
require('./style.scss');

const HeroBanner = ({ display = true }) => {
    const [subscribed, setSubscribed] = useState(true);
    const [movieDetails, setShowMovieDetails] = useState(false);
    const [moviePreviewAvailable, setPreviewAvailable] = useState(true);
    const themes = useSelector(state => state.ThemeReducer);
    const signedInStatus = useSelector(state => pathOr('',
        ['SignInReducer', 'signInstatus', 'responseCode'])(state));
    const isSignedIn = equals(200, signedInStatus);

    const { icons } = themes
    const playicon = pathOr('', ['playBtn'])(icons);


    // media query display
    const viewport = useMediaQuery('(min-width: 768px)');



    // config videoautoplay
    const [autoPlayConfig, setAutoPlayConfig] = React.useState(
        {
            opacity: 0
        })

    // Video player config
    const config = {
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
    };
    const videoConfigStyle = {
        position: 'absolute',
        right: '0',
        bottom: viewport ? '42%' : '7%',
        minWidth: '100%',
        minHeight: '80%',
        width: 'auto',
        height: 'auto',
        zIndex: '1',
        backgroundSize: 'cover',
        overflow: 'hidden'
    }

    React.useEffect(() => {
        let timer = setTimeout(function () {
            setAutoPlayConfig({ ...autoPlayConfig, opacity: 0 })
        }, 5000);
        return () => {
            clearTimeout(timer)
        }
    }, []);


    const handleClick = () => {
        if (isSignedIn) {
            return window.location.pathname = '/player';
        }
        return window.location.pathname = '/signIn';
    }
    return (
        <section className="containerwrap">
            <div className="card-overlay" />
            {
                <>
                    <div className="img-wrapper"
                        style={{
                            // backgroundImage: `url("https://via.placeholder.com/500")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>

                        {
                            moviePreviewAvailable &&
                            <>
                                <div className="hoverDiv" />
                                <div style={{ ...autoPlayConfig }}>
                                    <VideoPreview videoConfigStyle={videoConfigStyle} config={config} />
                                </div>
                            </>
                        }
                        {/* <img src={poster} alt={'poster context'} /> */}
                    </div>
                    {
                        subscribed && !isSignedIn &&
                        <div className={"get-subscription"}>
                            <p>
                                get your subscription now
                            </p>
                            <CustomizedInputBase />
                        </div>
                    }
                    {isSignedIn &&
                        <div className="info-section">
                            <h1>PRISON BREAK S4</h1>
                            <h4>2009 | ACTION-THRILLER | 179 Minutes</h4>
                            <div className="button-section">
                                <button className="play" onClick={() => handleClick()}>
                                    <span>
                                        <img src={`${play}`} alt="play button" className="imageCont" />
                                    </span>
                                    <span className="btnTxt">
                                        {'play'}
                                    </span>
                                </button>
                                <button className="addToList">
                                    <img src={plus} alt="shortlist movie" style={{ height: '17px' }} />
                                     Add to my list
                                     </button>
                            </div>
                        </div>
                    }
                </>
            }
        </section>
    )
}

export default HeroBanner