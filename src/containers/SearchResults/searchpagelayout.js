import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';

const SearchResultsPageLayout = () => {
    const themeObj = useSelector((state) => pathOr(null, ['ThemeReducer', 'layout'])(state));
    return (
        <>
            <Global
                styles={css`
                body,
                html {
                    height: initial !important;
                    background: #131722 !important;
                }
                 `
                }
            />
            <Global
                styles={css`
                    body{
                        .tentkotta-Search-Results-Page .movie-list-container .movie-list-grid .movie-card{
                            width: 148px;
                            height: 196px;
                        }
                        .tentkotta-Search-Results-Page .movie-list-container .movie-list-grid li {
                            width: 16%;
                        }

                        .search-background {
                            background-color: #131722;
                            min-height: 100vh !important;

                            .movie-card-text {
                                bottom: auto;
                            }

                            .headerShadow {
                                position: relative;
                                background: black;
                            }

                            .movie-list-grid .movie-card {
                                width: 148px;
                                height: 196px;
                            }

                            .movie-list-grid 

                            .upgrade {
                                background: transparent linear-gradient(180deg, #ffbb3b 0%, #ffa90a 100%) 0% 0% no-repeat;
                            }
                        }
                        


                        @media screen and (max-width: 768px) {
                            .search-background .movie-list-grid li{
                                    width: 50%;
                            }
                            .tentkotta-Search-Results-Page .movie-list-container .navbar-input img {
                                width: 6% !important;
                            }
                            .tentkotta-Search-Results-Page .movie-list-container .navbar-input{
                                margin: 5px -40px 7px 24px;
                            }
                            .tentkotta-Search-Results-Page .movie-list-container .navbar-input-container {
                                height: 54px !important;
                                width: 87% !important;
                                margin-bottom: 2rem;
                            }
                        }
                        @media screen and (max-width: 480px) {
                            .tentkotta-Search-Results-Page .movie-list-container .movie-list-grid li {
                                width: 49% !important;
                            }
                        }

                        @media only screen and (device-width: 768px) {
                            .tentkotta-Search-Results-Page .movie-list-container .movie-list-grid li {
                                width: 24%;
                        }
                        }
                 }
                `
                }
            />

        </>
    )

};

export default SearchResultsPageLayout;