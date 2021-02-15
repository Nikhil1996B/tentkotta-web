import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import { useMediaQuery } from '../Header/viewportHook';

export const SearchResultsListLayout = () => {
    const themeObj = useSelector((state) => pathOr(null, ['ThemeReducer', 'layout'])(state));
    // media query display
    const breakpoint = {
        sm: useMediaQuery('(max-width: 576px)'),
        md: useMediaQuery('(max-width: 768px)'),
        lg: useMediaQuery('(min-width:1200px)'),
        xl: useMediaQuery('(min-width: 1440px)'),
        xxl: useMediaQuery('(min-width:2000px)')
    };
    const sm = pathOr(['', 'md'])(breakpoint);
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
                    .tentkotta-Search-Results-Page {
                        .movie-list-container {
                            margin: 0px 20px 20px 20px;
                            .filter-btn {
                                background-color: #2f323c;
                                padding: ${sm ? ' ' : '10%'};
                            }
                            .navbar-input-container {
                                height: 90px;
                                width: 100% !important;
                                background: #f5f5f51f 0% 0% no-repeat padding-box;
                            }
                            .navbar-input {
                                width: 100%;
                            }
                            .navbar-input {
                                font: normal normal normal 25px/38px Inter;
                                letter-spacing: 0px;
                                color: #949cb0;
                                img {
                                    left: 82%;
                                }
                            }
                        }
                        .movie-list-container aside nav {
                            width: 50%;
                        }
                        .movie-list-container h1 {
                            font: normal normal normal 25px;
                            font-size: 25px !important;
                            letter-spacing: 0px;
                            color: #ffffff;
                            margin: 0;
                        }
                        .movie-list-grid {
                            list-style-type: none;
                            padding: 0;
                            margin: 0;
                        
                            display: flex;
                            justify-content: flex-start;
                            flex-wrap: wrap;
                        }
                        
                        .movie-list-grid li {
                            padding: 10px 15px;
                            text-align: left;
                            width: 30%;
                        }
                 }

                `
                }
            />
        </>
    )
};


export default SearchResultsListLayout;