import React, { useEffect, useState } from 'react';
import bbd from "./images/bbd.jpg"

function VideoPreview({ config, videoConfigStyle, displayposter = false, id }) {

    const [enableAutoPlayDelay, setAutoPlayinterval] = useState(true);

    const stopMovie = (e) => {
        console.log('off');
    }

    const playMovie = (e) => {
        console.log('on');
    }

    useEffect(() => {
        setAutoPlayinterval(true);
        let timer;
        if (enableAutoPlayDelay) {
            timer = setTimeout(function () {
                document.getElementById("playideo").play();
            }, 5000);
        }
        return () => {
            clearTimeout(timer)
        }
    }, [])

    const defaultStyle = {
        // position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        transform: "translate(-50%, -50%)",
        zIndex: "1"
    };
    return (
        <video
            poster={displayposter ? bbd : ''}
            autoPlay
            // onMouseOver={(e) => e.target.play()}
            loop
            controls
            muted
            // onMouseOut={(e) => e.target.pause()}
            style={videoConfigStyle ? { ...videoConfigStyle } : { ...defaultStyle }}
            id={id ? id : "playideo"}
        >
            <source src="x" type="video/x" />
            <source src="x" type="x" />
            <source src={config.url ? config.url :
                "https://giant.gfycat.com/VerifiableTerrificHind.mp4"}
                type="video/mp4" />
        </video >
    )
}

export default VideoPreview;