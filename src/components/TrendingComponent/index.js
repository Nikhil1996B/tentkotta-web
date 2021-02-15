import React, { useEffect, useState } from 'react';
import { getByGenrer } from '../Carousel/api/Movies';
import { useSelector } from 'react-redux';
import pathOr from "ramda/src/pathOr";
import equals from "ramda/src/equals";
import Slider from "react-slick";
require('./style.scss');

const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';
const TRUNCATE_LENGTH = 100;



export function FilterSlider({ genre = [], handleClick, selectedGenere, isActive }) {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };
    return (
        <Slider {...settings}>
            {genre.map((value, index) =>
                <div key={index} onClick={e => handleClick(value)}>
                    <a href="#tendingfilter" className={selectedGenere == value ? isActive : ''} >
                        {value}
                    </a>
                </div>
            )}
        </Slider>
    )
}



function TrendingNow({ filterAvailable = true, title = "", className }) {

    const [trending, setMovies] = useState({ trending: [] })
    const [selectedGenere, seSelectedGenere] = useState('Crime');

    const signedInStatus = useSelector(state => pathOr('',
        ['SignInReducer',
            'signInstatus',
            'responseCode'
        ])(state));
    const isSignedIn = equals(200, signedInStatus);

    useEffect(() => {
        getByGenrer('Action').then(
            res =>
                setMovies({ ...trending, movies: res })
        );

        return () => { }
    }, []);

    const genre = [
        'Comedy',
        'Action',
        'Adventure',
        'Crime'
    ];
    const isActive = 'active';
    const trendingmovies = useSelector(state => pathOr([],
        ['homepageReducer', 'pagecontent', 'trendingmovies', 'records'])(state));
    const firstValue = trending && trending.movies ? trending.movies.slice(1, 5) : null;
    function handleClick(value) {
        getByGenrer(`${value}`).then(res => setMovies({ ...trending, movies: res }));
        seSelectedGenere(`${value}`);
    }
    return (
        <div className="trendingnow-wrapper" id="tendingfilter">
            <div className="filter">
                {title && <h1>{title}</h1>}
                {title && <hr />}
                {filterAvailable &&
                    <nav className="trending-listitem">
                        <ul>
                            {genre.map((value, index) =>
                                <li key={index} onClick={e => handleClick(value)}
                                    className={selectedGenere == value ? isActive : ''}>
                                    <a href="#tendingfilter">
                                        {value}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </nav>
                }
                {
                    <section className="slick-slider-mobile">
                        <FilterSlider
                            handleClick={handleClick}
                            selectedGenere={selectedGenere}
                            genre={genre}
                            isActive={isActive} />
                    </section>
                }
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
                            {
                                trending && trending.movies && trending.movies.length ?
                                    trending.movies[0].title.length > 20 ?
                                        trending.movies[0].substring(0, 10) + '..' : trending.movies[0].title
                                    : null
                            }
                            <br />
                            {
                                trending && trending.movies && trending.movies.length ?
                                    trending.movies[0].release_date.split('-')[0]
                                    :
                                    null
                            }

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
                                    {value.title && value.title.length > 20
                                        ? value.title.substring(0, 20) + '..' : value.title} <br />
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