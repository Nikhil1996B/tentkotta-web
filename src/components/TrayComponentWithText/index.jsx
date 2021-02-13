import React, { useState, useEffect } from 'react';
import Home from '../Carousel/Home';
import { getByGenrer } from '../Carousel/api/Movies';
import { useMediaQuery } from '../../components/Header/viewportHook';

require('./style.scss')

function TrayComponentText({ filterAvailable = false, title, progressBar, disPlayContent, viewAll = false, redirecturl }) {

    // media query display
    const display = useMediaQuery('(min-width: 768px)');

    const [movies, setMovies] = useState({ movies: [] })

    useEffect(() => {
        getByGenrer('Horror').then(res => setMovies({ ...movies, animationMovies: res }));
    }, [])

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
                        movies={movies}
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