import React from 'react';
import poster from './assets/masterPoster.jpg';
import { useSelector } from 'react-redux';
import pathOr from "ramda/src/pathOr";
import CustomizedInputBase from "./subscriptionForm"
require('./style.scss');

const HeroBanner = ({ display = false }) => {
    const themes = useSelector(state => state.ThemeReducer);

    const { icons } = themes
    const playicon = pathOr('', ['playBtn'])(icons)
    return (
        <section className="container">
            <div className="card-overlay" />
            <div className="img-wrapper">
                <img src={poster} alt={'poster context'} />
            </div>
            {true && <div className={"get-subscription"}>
                <p>
                    get your subscription now
                </p>
                <CustomizedInputBase />
            </div>}
            {display && <div className="info-section">
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
            </div>}
        </section>
    )
}

export default HeroBanner