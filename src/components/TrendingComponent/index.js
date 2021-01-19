import React, { useEffect, useState } from 'react';
import { getByGenrer } from '../Carosal/api/Movies';
require('./style.scss');

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';
const TRUNCATE_LENGTH = 100;


function TrendingNow({ filterAvailable = true, title = "" }) {

    const [trending, setMovies] = useState({ trending: [] })
    const [selectedGenere, seSelectedGenere] = useState('Comedy');

    useEffect(() => {
        getByGenrer('Action').then(res => setMovies({ ...trending, movies: res }));
    }, []);

    const genre = [
        'Comedy',
        'Action',
        'Adventure',
        'Crime',
    ];
    const isActive = 'active';
    const firstValue = trending && trending.movies ? trending.movies.slice(1, 5) : null;
    console.log('outside', firstValue);
    function handleClick(value) {
        getByGenrer(`${value}`).then(res => setMovies({ ...trending, movies: res }));
        console.log(trending.movies);
        seSelectedGenere(`${value}`);
    }
    return (
        <div className="trendingnow-wrapper" id="tendingfilter">
            <div className="filter">
                {title && <h1>{title}</h1>}
                {title && <hr />}
                {filterAvailable &&
                    <div className="trending-listitem">
                        <ul>
                            {genre.map((value, index) =>
                                <li key={index} onClick={e => handleClick(value)}>
                                    <a href="#tendingfilter" className={selectedGenere == value ? isActive : ''} >
                                        {value}
                                    </a>
                                </li>
                            )}
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
                    } : {}}>
                    <div className="number-one">{`01`}</div>
                    <div className="number number-right">
                        {trending && trending.movies && trending.movies.length ? trending.movies[0].title : null}
                    </div>
                </div>
                <ol start="2" className="right-section">
                    {
                        firstValue ? firstValue.map((value, index) => (
                            <li className="sub-section"
                                style={value ? {
                                    backgroundColor: '#202020',
                                    backgroundImage: `url(${imageUrl}${size}${value.backdrop_path ? value.backdrop_path : ''})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                } : {}} key={index}>
                                <div className="number">
                                    {value.title}
                                </div>
                            </li>
                        )) : null
                    }

                </ol>
            </div>
        </div>

    )
};

export default TrendingNow