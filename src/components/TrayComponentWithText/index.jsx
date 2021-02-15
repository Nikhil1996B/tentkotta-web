import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { pathOr } from 'ramda';
import Home from '../Carousel/Home';
import { getByGenrer } from '../Carousel/api/Movies';
import { useMediaQuery } from '../../components/Header/viewportHook';

require('./style.scss')

function TrayComponentText({
    filterAvailable = false,
    title = '',
    progressBar,
    disPlayContent = {
        header: 'Popular movies to watch now',
        content: 'Most watched movies by days'
    },
    viewAll = false,
    redirecturl }) {

    // media query display
    const display = useMediaQuery('(max-width: 768px)');

    const [movies, setMovies] = useState({ movies: [] })
    const trending = useSelector(state => pathOr([],
        ['homepageReducer', 'pagecontent', 'trendingmovies', 'records'])(state));
    useEffect(() => {
        getByGenrer('Horror').then(res => setMovies({ ...movies, animationMovies: trending }));
    }, []);

    return (
        <div>
            <section className="trayInfoWrapper" id="#trayinfo">
                <aside className="content-section">
                    <hr style={{ width: '20%', position: 'absolute' }} />
                    {
                        disPlayContent && disPlayContent.header && <h1 className={'textSplitter'}>
                            {disPlayContent.header}
                        </h1>
                    }
                    {disPlayContent && disPlayContent.content && <p>{disPlayContent.content}</p>}
                    {
                        viewAll ? <>
                            <hr />
                            <p><a href="#trayinfo">View all &nbsp; <span>&#62;</span></a></p>
                        </> : null
                    }
                </aside>
                <div className="popular-movies-mob">Popular movies to watch</div>
                <aside className="slider-width">
                    <Home
                        progressBar={progressBar}
                        movies={trending}
                        title={title}
                        displayCard={display ? 3 : 5}
                        redirecturl={redirecturl}
                    />
                </aside>
            </section>
        </div>
    )
}
export default TrayComponentText