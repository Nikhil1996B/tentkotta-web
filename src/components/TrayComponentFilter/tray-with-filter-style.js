import React from 'react';

export const TrayFilterGlobalStyle = () => {

    return (
        <>
            <style type={'text/css'}>
                {` .tray-with-filter {
                            padding: 0 1rem;
                            
                        }
                        .tray-with-filter .carousel-content>div>div>div>div>div:first-child {
                            height: 25vh;
                        }
                        .tray-with-filter .carousel-content>div>div>div>div>div:first-child{
                            height: 39vh;
                        }
                        `}
            </style>
        </>
    )
}