import React, { useState, useEffect } from 'react';
import { MovieCard } from '../../../searchBar/MovieCard';
import { pathOr } from 'ramda';
import { useSelector } from 'react-redux';

export const ResultsList = () => {
    const moviesRecord = useSelector(state => pathOr([], ['search', 'records', 'fetchedMovies'])(state));
    const loading = useSelector(state => pathOr(false, ['search', 'loading'])(state))
    if (!moviesRecord.length) {
        return (
            <div className="movie-list-container">
                <h1>
                    No Results found. try with some other search criteria.
          </h1>
            </div>
        )
    }
    return (
        <>
            <ol className="movie-list-grid">
                {moviesRecord && moviesRecord.map(movie => (
                    <li key={movie.id}>
                        <MovieCard
                            movie={movie}
                            displayTextOnCard={false}
                        />
                    </li>
                ))}
            </ol>
        </>
    )
}