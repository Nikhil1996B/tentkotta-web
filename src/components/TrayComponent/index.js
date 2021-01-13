import React, { useState, useEffect } from 'react';
import Home from '../Carosal/Home';
import { getByGenrer } from '../Carosal/api/Movies';
import { useMediaQuery } from '../../components/Header/viewportHook';

require('./style.scss')

function TrayComponent({ filterAvailable = true, title }) {

    // media query display
    const display = useMediaQuery('(min-width: 768px)');

    const [movies, setMovies] = useState({ movies: [] })

    useEffect(() => {
        getByGenrer('Action').then(res => setMovies({ ...movies, animationMovies: res }));
    }, [])

    return (
        <div>
            <div className="tray-wrapper">
                <Home
                    movies={movies}
                    title={title}
                    displayCard={display ? 3 : 5}
                />
            </div>
        </div>
    )
}
export default TrayComponent