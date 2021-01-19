import React, { useState, useEffect } from 'react';
import Home from '../Carosal/Home';
import { getByGenrer } from '../Carosal/api/Movies';
import { useMediaQuery } from '../../components/Header/viewportHook';

require('./style.scss')

function TrayComponentFilter({ filterAvailable = true, title }) {
    const [movies, setMovies] = useState({ movies: [] })
    // media query display
    const display = useMediaQuery('(min-width: 768px)');

    useEffect(() => {
        getByGenrer('Animation').then(res => setMovies({ ...movies, animationMovies: res }));
    }, [])

    const genre = [
        'Comedy',
        'Action',
        'Adventure',
        'Crime',
    ]

    const style = {
        displayMode: {
            display: 'flex'
        },
        hrStyle: {

        }
    }

    const handleClick = (value) => {
        getByGenrer(`${value}`).then(res => setMovies({ ...movies, animationMovies: res }));
    }
    return (
        <div>
            <div className="carousalWrapper" id="carousal-filter">
                {filterAvailable && <div className="filter">
                    <ul>
                        {genre.map((value, index) => <li key={index} onClick={e => handleClick(value)}><a href="#carousal-filter">{value}</a></li>)}
                    </ul>
                </div>}
                <Home
                    movies={movies}
                    style={style}
                    title={title}
                    displayCard={display ? 3 : 5}
                />
            </div>
        </div>
    )
}
export default TrayComponentFilter