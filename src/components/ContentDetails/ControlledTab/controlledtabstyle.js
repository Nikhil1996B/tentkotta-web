import React from 'react';
import { Global, css } from '@emotion/react';
export const Tabstyle = {
    tabs: () => ({
        fontSize: '34px',
    }),
    tab: () => ({
        minHeight: '60vh',
        paddingTop: '2rem',
        paddingBottom: '2rem'
    })
}

export const ControlledTabGlobalStyle = () => {
    return (
        <>
            <Global
                styles={css`
                      body {
                      .contentDetailsWrapper .nav-tabs {
                              border: none;
                        }
                      .contentDetailsWrapper .nav-tabs .nav-link.active
                       {
                            color: #FFFFFF !important;
                            font-size: 38px !important;
                            border-radius: none;
                            border: none;
                            border-bottom: 1px solid white !important;
                         }
                         .contentDetailsWrapper .nav-tabs .nav-link:hover{
                            border: none;
                         }
                       }
                   `
                }
            />
        </>
    )
}