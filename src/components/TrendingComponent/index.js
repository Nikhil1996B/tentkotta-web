import React, { useEffect, useState } from 'react';
import { getByGenrer } from '../Carosal/api/Movies';
require('./style.scss');

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';
const TRUNCATE_LENGTH = 100;


function TrendingNow({ filterAvailable = true, title = "", className }) {

    const [trending, setMovies] = useState({ trending: [] })
    const [selectedGenere, seSelectedGenere] = useState('Crime');

    useEffect(() => {
        getByGenrer('Crime').then(res => setMovies({ ...trending, movies: res }));
    }, []);

    const genre = [
        'Comedy',
        'Action',
        'Adventure',
        'Crime',
    ];
    const isActive = 'active';
    const firstValue = trending && trending.movies ? trending.movies.slice(1, 5) : null;
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
                <ol className="left-section"
                    style={trending && trending.movies && trending.movies.length ? {
                        backgroundColor: '#202020',
                        backgroundImage: `url(${imageUrl}${size}${trending.movies[0].backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    } : {}}>
                    <li>
                        <div className="sub-section" />
                        <div className="number number-right">
                            {trending && trending.movies && trending.movies.length ?
                                trending.movies[0].title : null}<br />
                            {trending && trending.movies && trending.movies.length ?
                                trending.movies[0].release_date.split('-')[0] : null}
                        </div>
                    </li>
                </ol>
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
                                    {value.title} <br />
                                    {value.release_date ? value.release_date.split('-')[0] : null}
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