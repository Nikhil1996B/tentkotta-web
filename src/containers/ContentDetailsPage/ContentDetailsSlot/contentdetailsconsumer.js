import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Contentdetailscontext } from './contentdetailscontext';
import { ContentDetails } from '../../../components/ContentDetails/indexv1';
import ContentDetailsPageLayout from './contentdetailsstyle';
const ContextDetailsWrapper = () => {
    return (
        <Contentdetailscontext.Consumer>
            {
                ({
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
                }) => (
                    <>
                        <ContentDetails
                            credits={credits}
                            movieDetails={movieDetails}
                            videos={videos}
                            trailer_id={trailer_id}
                            YoutubePlay={YoutubePlay}
                            hours={hours}
                            minutes={minutes}
                            crew={crew}
                            director={director}
                            production={production}
                            writing={writing}
                            opts={opts}
                            image_base_url={image_base_url}
                        />
                    </>
                )
            }
        </Contentdetailscontext.Consumer>
    )
}

export const ContentDetailsProvider = () => {
    const api_key = "df1a8a2aad5fbba70d7851155c59e9f7";
    const [credits, setCredits] = useState();
    const [movieDetails, setDetails] = useState();
    const [videos, setVideo] = useState();
    const [detailShow, setShow] = useState(1);
    const [YoutubePlay, setYoutubePlay] = useState(false);
    const [trailer_id, setTrailer_id] = useState();
    const base_url = "https://api.themoviedb.org/3/movie/";
    let detailsLoaded = false;
    let creditsLoaded = false;
    let hours, minutes;
    let director = [];
    let crew = [];
    let writing = [];
    let production = [];

    const opts = {
        width: "100%",
        minHeight: "200%",
        paddingTop: "56.25%", // Percentage ratio for 16:9
        position: "absolute",
        playerVars: {
            autoplay: 1,
            listType: "user_uploads",
        },
    };

    const urlParams = new URLSearchParams(window.location.search);
    const movie_id = urlParams.get("id");

    const image_base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchDetails() {
            const response = await axios.get(
                `${base_url}${movie_id}?api_key=${api_key}`
            );
            console.log("Movie details are", response.data);
            setDetails(response.data);
            return response;
        }
        async function fetchCredits() {
            const response = await axios.get(
                `${base_url}${movie_id}/credits?api_key=${api_key}`
            );
            console.log("Credits are ", response.data);
            setCredits(response.data);
        }
        async function getVideo() {
            const response = await axios.get(
                `${base_url}${movie_id}/videos?api_key=${api_key}`
            );
            console.log(response.data.results);
            setVideo(response.data.results);
        }
        fetchCredits();
        fetchDetails();
        getVideo();
    }, [base_url, movie_id, api_key]);

    const playVideo = () => {
        console.log("Videos are ", videos);
        if (videos) {
            setYoutubePlay(true);
            // videos.map((video) => {
            setTrailer_id(videos[0].key);
            console.log("Id is ", trailer_id);
            console.log("Youtube PLay value is ", YoutubePlay);
            //setplay(0);
            //console.log(play);

            //});
        } else {
            setYoutubePlay(false);
            console.log(" 0 Youtube PLay value is ", YoutubePlay);
        }
        return trailer_id;
    };

    if (movieDetails) {
        detailsLoaded = true;
    }
    if (credits) {
        creditsLoaded = true;
        credits.crew.map((person) => {
            if (person.known_for_department === "Directing") {
                director.push(person.name);
            } else if (person.known_for_department === "Production") {
                production.push(person.name);
            } else if (person.known_for_department === "Writing") {
                writing.push(person.name);
            } else if (person.known_for_department === "Crew") {
                crew.push(person.name);
            }
            return person.name;
        });
    }

    if (detailsLoaded && movieDetails.runtime && movieDetails.runtime > 0) {
        hours = Math.floor(movieDetails.runtime / 60);
        minutes = movieDetails.runtime % 60;
    }



    const ContentDetailsState = {
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
    }

    return (
        <Contentdetailscontext.Provider value={ContentDetailsState}>
            <>
                <ContentDetailsPageLayout />
                <ContextDetailsWrapper />
            </>
        </Contentdetailscontext.Provider>
    )
}