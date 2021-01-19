import React, { useState, useEffect } from 'react';
import Home from '../Carosal/Home';
import { getByGenrer } from '../Carosal/api/Movies';
import { useMediaQuery } from '../../components/Header/viewportHook';

require('./style.scss')

function TrayComponentText({ filterAvailable = false, title }) {
    // media query display
    const display = useMediaQuery('(min-width: 768px)');

    const [movies, setMovies] = useState({ movies: [] })

    useEffect(() => {
        getByGenrer('Horror').then(res => setMovies({ ...movies, animationMovies: res }));
    }, [])

    return (
        <div>
            <div className="trayInfoWrapper" id="#trayinfo">
                <div className="content-section">
                    <hr style={{ width: '20%' }} />
                    <h1>Popular movies to watch now</h1>
                    <p>Most watched movies by day</p>
                    <hr />
                    <p><a href="#trayinfo">View all</a></p>
                </div>
                <div className="popular-movies-mob">Popular movies to watch</div>
                <div className="slider-width">
                    <Home
                        movies={movies}
                        title={title}
                        displayCard={3}
                    />
                </div>
            </div>
        </div>
    )
}
export default TrayComponentText