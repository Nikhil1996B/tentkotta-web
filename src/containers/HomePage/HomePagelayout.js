import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';

const HomePageLayout = () => {
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
                    .tentkotta-Home-Page {
                        width: 100% !important;
                        min-height: 90vh !important;
                    .headerShadow {
                        position: initial;
                        }
                    }
                    .tentkotta-Home-Page .trayInfoWrapper {
                      padding-left: 3rem;
                    }
                    .upgrade {
                        font-family: GothamLight;
                        background: #e1540f !important;
                      }
                 }
                 @media screen and (max-width: 480px) {
                  .tentkotta-Home-Page .trayInfoWrapper {
                    padding-left: 0px !important;
                  }
                }
                 @media only screen and (device-width: 768px) {
                  .tentkotta-Home-Page .trayInfoWrapper {
                    padding-left: 0px !important;
                  }
                 }
                `
        }
      />

    </>
  )

};

export default HomePageLayout;