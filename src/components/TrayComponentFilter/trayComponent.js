import React, { useState, useEffect } from 'react';
import Home from '../Carousel/Home';
import { getByGenrer } from '../Carousel/api/Movies';
import { useMediaQuery } from '../../components/Header/viewportHook';
import { FilterSlider } from '../TrendingComponent';
require('./style.scss')

function TrayComponentFilter({ filterAvailable = true, title, redirecturl }) {
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
        'Sci',
        'Adventure',
        'Crime',
        'Romance',
        'Latest',
        'Watch'
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
                <div className="filter">
                    {title && <h1 style={{ width: '30%', color: 'white' }}>{title}</h1>}
                    {title && <hr style={{ width: '40%' }} />}
                    {filterAvailable &&
                        <nav className="trending-listitem" style={{ width: 'auto' }}>
                            <ul>
                                {genre.map((value, index) =>
                                    <li key={index} onClick={e => handleClick(value)} className={selectedGenere == value ? isActive : ''}>
                                        <a href="#carousal-filter" >
                                            {value}
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    }
                    {
                        <section className="slick-slider-mobile">
                            <FilterSlider handleClick={handleClick} selectedGenere={selectedGenere} genre={genre} isActive={isActive} />
                        </section>
                    }
                </div>
                <Home
                    movies={movies}
                    displayCard={display ? 3 : 8}
                    redirecturl={redirecturl}
                />
            </div>
        </div>
    )
}
export default TrayComponentFilter