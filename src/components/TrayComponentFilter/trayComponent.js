import React, { useState, useEffect } from 'react';
import Home from '../Carosal/Home';
import { getByGenrer } from '../Carosal/api/Movies';
import { useMediaQuery } from '../../components/Header/viewportHook';

require('./style.scss')

function TrayComponentFilter({ filterAvailable = true, title }) {
    const [movies, setMovies] = useState({ movies: [] })
    // media query display
    const display = useMediaQuery('(min-width: 768px)');
    const [selectedGenere, seSelectedGenere] = useState('Drama');
    useEffect(() => {
        getByGenrer('Animation').then(res => setMovies({ ...movies, animationMovies: res }));
    }, [])

    const isActive = 'active';

    const genre = [
        'Drama',
        'Sci-Fi',
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
        seSelectedGenere(`${value}`);
    }
    return (
        <div className="tray-with-filter">
            <div className="carousalWrapper" id="carousal-filter">
                {filterAvailable && <div className="filter">
                    <ul>
                        {genre.map((value, index) =>
                            <li key={index} onClick={e => handleClick(value)}>
                                <a href="#carousal-filter" className={selectedGenere == value ? isActive : ''}>
                                    {value}
                                </a>
                            </li>)}
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