import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "axios";
import JumbotronComp from './JumbotronComp/jumbotron';
import Controlledtab from './ControlledTab/controlledtab';

export const ContentDetails = ({
    credits,
    movieDetails,
    videos,
    trailer_id,
    YoutubePlay,
    hours,
    minutes,
    crew,
    director,
    production,
    writing,
    opts,
    image_base_url
}) => {
    return (
        <>
            <JumbotronComp
                movieDetails={movieDetails}
                hours={hours}
                minutes={minutes}
                director={director}
                image_base_url={image_base_url}
            />
            <Controlledtab production={production} writing={writing} crew={crew} />
        </>
    )
}