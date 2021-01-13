import React, { useState } from "react";
import SideNav from "../../components/SideNav/SideNav"
import FullSideNav from "../../components/FullSideNav/FullSideNav"
import Hamburger from "../../assets/images/hamburger.png";
import Player from "../../components/Player/Player"
import "./VideoPage.css"

function VideoPage(){
    const [Navshow, setNavShow] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    let source = {
        sources: [{
            // src: "https://d1gnaphp93fop2.cloudfront.net/videos/5fb40b3d97d6b12d9641614c/mp4/_1080.mp4",
            // type: "application/x-mp4",
            src: "https://d1gnaphp93fop2.cloudfront.net/videos/5fb40b3d97d6b12d9641614c/m3u8/master.m3u8",
            type: "application/x-mpegurl"
        }]
    };

    return (
        <div className = "page-background">  
            <div>
                <SideNav ></SideNav>
                <img src={Hamburger} alt="icon" className="icon" onClick ={handleNavModal} />
                <FullSideNav show = {Navshow} handleModal = {handleNavModal}></FullSideNav>
            </div>
            <div>
                <Player source={source} onPlay={() => {console.log("The player has started playing.")}}/>
            </div>
        </div> 
    )
}

export { VideoPage };