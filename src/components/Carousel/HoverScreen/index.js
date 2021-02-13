import React, { useState, useEffect } from "react";
import "./styles.scss";
import VideoPreview from '../../../UI_Frontendlib/molecules/previewVideoPlayer';
import play from './assets/play.svg';
import like from './assets/like.svg';
import plus from './assets/plus.svg';
import subtitles from './assets/subtitles.svg';
import Fourkhd from './assets/Fourkhd.svg';
import { Link } from "react-router-dom";

const HoverScreen = ({ item, api_key, media_type, backgroundImage }) => {
  const [moviePreviewAvailable, setPreviewAvailable] = useState(true);
  const videoConfigStyle = {
    position: 'absolute',
    right: '0',
    minWidth: '100%',
    minHeight: '80%',
    width: 'auto',
    height: 'auto',
    zIndex: '1',
    backgroundSize: 'cover',
    overflow: 'hidden'
  }
  const config = {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
  };
  // config videoautoplay
  const [autoPlayConfig, setAutoPlayConfig] = React.useState(
    {
      opacity: 0
    })
  // React.useEffect(() => {
  //   let timer = setTimeout(function () {
  //     setAutoPlayConfig({ ...autoPlayConfig, opacity: 1 })
  //   }, 5000);
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, []);
  let hours = 0,
    minutes = 0;
  return (
    <div className="hoverScreen">
      <Link
        to={`/${media_type}?id=${item.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <img
          src={backgroundImage}
          alt={item.name}
          className="mediaHoverImg"
        />
        {/* {
          moviePreviewAvailable &&
          <>
            <div className="hoverDiv" />
            <div style={{ ...autoPlayConfig }}>
              <VideoPreview videoConfigStyle={videoConfigStyle} config={config} />
            </div>
          </>
        } */}
        <div className="hoverData">
          <div className="hoverHeading">
            <div className="playDiv">
              <div className="playIcon">
                <img src={play} alt="play movie" className="playButton" />
                <span className="playtext">Play</span>
              </div>
              <div className="displayleft">
                <img src={like} alt="" className="imgsize" />
              </div>
              <div>
                <img src={plus} alt="" className="imgsize" />
              </div>
            </div>
            {/* <div>
              <AddOutlinedIcon className="addIcon" />
            </div> */}
          </div>
          <div className="hovertitle">
            {item.title ? item.title : item.original_name}
          </div>
          <div className="overview">
            {item.overview.length > 90
              ? item.overview.substr(0, 60) + "..."
              : item.overview}
          </div>
          <div className="footerScreen">
            <div className="runTime">
              {`${'2'}h `}
              {`${'30'}min`}
            </div>
            <div className="releaseYear">
              {item.release_date ? item.release_date.substr(0, 4) : ""}
            </div>
            <div className="rated">Certificate: {item.adult ? "18+" : "U"}</div>
            <p className="subtitle"><img src={Fourkhd} alt="" /></p>
            <p className="subtitle"><img src={subtitles} alt="" /></p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HoverScreen;
