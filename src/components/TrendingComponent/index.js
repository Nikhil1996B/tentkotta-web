import React, { useEffect, useState } from 'react';
import { getByGenrer } from '../Carosal/api/Movies';
require('./style.scss');

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';
const TRUNCATE_LENGTH = 100;


function TrendingNow({ filterAvailable = true, title = "" }) {
    const [trending, setMovies] = useState({ trending: [] })

    useEffect(() => {
        getByGenrer('Action').then(res => setMovies({ ...trending, movies: res }));
    }, [])

    const genre = [
        'Comedy',
        'Action',
        'Adventure',
        'Crime',
    ]

    const handleClick = (value) => {
        getByGenrer(`${value}`).then(res => setMovies({ ...trending, movies: res }));
        console.log(trending.movies)
    }
    return (
        <div className="trendingnow-wrapper" id="tendingfilter">
            <div className="filter">
                {title && <h1>{title}</h1>}
                {title && <hr />}
                {filterAvailable && <div id="filter">
                    <ul>
                        {genre.map(value => <li onClick={e => handleClick(value)}><a href="#tendingfilter">{value}</a></li>)}
                    </ul>
                </div>}
            </div>
            <div className="trending-now">
                <div className="left-section"
                    style={trending && trending.movies && trending.movies.length ? {
                        backgroundColor: '#202020',
                        backgroundImage: `url(${imageUrl}${size}${trending.movies[0].backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    } : {}}></div>
                <div className="right-section">
                    <div className="sub-section"
                        style={trending && trending.movies && trending.movies.length ? {
                            backgroundColor: '#202020',
                            backgroundImage: `url(${imageUrl}${size}${trending.movies[0].backdrop_path})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        } : {}}>
                        1
                    </div>
                    <div className="sub-section"
                        style={trending && trending.movies && trending.movies.length ? {
                            backgroundColor: '#202020',
                            backgroundImage: `url(${imageUrl}${size}${trending.movies[0].backdrop_path})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        } : {}}>
                        2
                    </div>
                    <div className="sub-section"
                        style={trending && trending.movies && trending.movies.length ? {
                            backgroundColor: '#202020',
                            backgroundImage: `url(${imageUrl}${size}${trending.movies[0].backdrop_path})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        } : {}}>
                        3
                    </div>
                    <div className="sub-section"
                        style={trending && trending.movies && trending.movies.length ? {
                            backgroundColor: '#202020',
                            backgroundImage: `url(${imageUrl}${size}${trending.movies[0].backdrop_path})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        } : {}}>
                        4
                    </div>
                </div>
            </div>
        </div>

    )
};

export default TrendingNow