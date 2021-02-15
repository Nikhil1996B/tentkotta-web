import React from 'react';

export const TrayComponentGlobalStyle = () => {
    return (
        <>
            <style type="text/css">
                {`
               .tray-wrapper {
                padding: 0 1rem;
                .carousel-content > div > div > div > div > div > div:first-child {
                    height: 50vh;
                }
                .carousel-content > div > div > div > div {
                    margin: 0 1%;
                }
              }
                 @media screen and (max-width: $small-below) {
                .tray-wrapper {
                    padding: 0;
                    .carousel-content > div > div > div > div > div > div:first-child {
                        height: 30vh;
                    }
                }
            }
            
            /* Portrait and Landscape */
            @media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
                .tray-wrapper {
                    .carousel-content > div > div > div > div > div > div:first-child {
                        height: 30vh;
                    }
                }
            }
            
                `}
            </style>
        </>
    )
}