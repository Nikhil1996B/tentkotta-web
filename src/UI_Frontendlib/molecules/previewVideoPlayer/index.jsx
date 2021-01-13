import React from 'react';
import bbd from "./images/bbd.jpg"

function VideoPreview(config) {
    const stopMovie = (e) => {
        console.log('off');
    }

    const playMovie = (e) => {
        console.log('on');
    }
    return (
        <video
            poster={bbd}
            onMouseOver={(e) => e.target.play()}
            loop
            muted
            onMouseOut={(e) => e.target.pause()}
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                transform: "translate(-50%, -50%)",
                zIndex: "1"
            }}
        >
            <source src={"https://giant.gfycat.com/VerifiableTerrificHind.mp4"} type="video/mp4" />
        </video>
    )
}

export default VideoPreview;