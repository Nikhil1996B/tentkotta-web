import React, { useState, useEffect } from 'react';
import Home from '../Carousel/Home';
import { getByGenrer } from '../Carousel/api/Movies';
import { useMediaQuery } from '../../components/Header/viewportHook';

require('./style.scss')

function TrayComponent({
    filterAvailable = true,
    title = "New Movies to Watch",
    progressBar,
    style,
    displayTextOnCard,
    displayHoverState = true,
    redirecturl
}) {
    // media query display
    const display = useMediaQuery('(max-width: 768px)');
    const [movies, setMovies] = useState({ movies: [] })
    useEffect(() => {
        getByGenrer('Action').then(res => setMovies({ ...movies, animationMovies: res }));
    }, []);

    return (
        <div>
            <div className="tray-wrapper">
                <Home
                    displayTextOnCard={displayTextOnCard}
                    movies={movies}
                    title={title}
                    displayCard={display ? 3 : 5}
                    progressBar={progressBar}
                    displayHoverState={displayHoverState}
                    redirecturl={redirecturl}
                />
            </div>
        </div>
    )
}
export default TrayComponent;