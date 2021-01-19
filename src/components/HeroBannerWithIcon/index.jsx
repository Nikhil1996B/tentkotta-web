import React, { useState } from 'react';
import poster from './assets/masterPoster.jpg';
import { useSelector } from 'react-redux';
import pathOr from "ramda/src/pathOr";
import { useMediaQuery } from '../Header/viewportHook';
import CustomizedInputBase from "./subscriptionForm";
import VideoPreview from '../../UI_Frontendlib/molecules/previewVideoPlayer';
require('./style.scss');

const HeroBanner = ({ display = true }) => {
    const [subscribed, setSubscribed] = useState(false);
    const [movieDetails, setShowMovieDetails] = useState(true);
    const [moviePreviewAvailable, setPreviewAvailable] = useState(true);
    const themes = useSelector(state => state.ThemeReducer);

    const { icons } = themes
    const playicon = pathOr('', ['playBtn'])(icons)

    // media query display
    const viewport = useMediaQuery('(min-width: 768px)');


    // Video player config
    const config = {
        url: "https://imdb-video.media-imdb.com/vi3183588377/1434659607842-pgv4ql-1463498780360.mp4?Expires=1611125492&Signature=MM5CBoxqQam5nO39DSPF~fUnfXN1thA-ti~LT-9JqWIw1IMjyvke8eLv1O0ISVo7bRmTz0E5U6ZqGBtMZ518HIHGVp8L7bYN01v29Jwqo151iO4IdkuLXP9Lx-ghmxgYLMu5y96cvJjyb3l~Rd-FtugkT45n6FKXIZgc9RYABE3-zht8wQU~wVEHr~QlfVTNoZLRfpr0Nytdr7niYbTDmRAm6jQB5Qs4M4dJDqmxq0UNY5vqMt0G1ltDQgkA34wQ9gnnVNv8rAF56VLQ19U~PseS9IRpxo0kJvMBxPuz6p-z7yzQTWzJX32ehwzfqheJhwTSLeFl~9o9-r0IhK5JZg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
    };
    const videoConfigStyle = {
        position: 'absolute',
        right: '0',
        bottom: viewport ? '280px' : '138px',
        minWidth: '100%',
        minHeight: '80%',
        width: 'auto',
        height: 'auto',
        zIndex: '1',
        backgroundSize: 'cover',
        overflow: 'hidden'
    }
    return (
        <section className="container">
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
                                <div className="info">
                                    <VideoPreview videoConfigStyle={videoConfigStyle} config={config} />
                                </div>
                            </>
                        }
                        {/* <img src={poster} alt={'poster context'} /> */}
                    </div>
                    {
                        subscribed &&
                        <div className={"get-subscription"}>
                            <p>
                                get your subscription now
                  </p>
                            <CustomizedInputBase />
                        </div>
                    }
                    {movieDetails &&
                        <div className="info-section">
                            <h1>Master</h1>
                            <h4>2021 | ACTION-THRILLER | 179 Minutes</h4>
                            <div className="button-section">
                                <button className="play"><span>
                                    <img src={`${playicon}`} alt="play button" className="imageCont" />
                                </span>
                                    <span className="btnTxt">{'play'}</span>
                                </button>
                                <button className="addToList">+ Add to my list</button>
                            </div>
                        </div>
                    }
                </>
            }
        </section>
    )
}

export default HeroBanner