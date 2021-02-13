import React, { useState, useEffect } from 'react';
import TrayComponentFilter from '../../components/TrayComponentFilter/trayComponent';
import TrayComponentText from '../../components/TrayComponentWithText/index';
import TrayComponent from '../../components/TrayComponent/index';
import TrendingNow from '../../components/TrendingComponent';
import { isSignedIn, deleteCookie } from '../../components/Forms/SignIn/authentication';
    
export const ContentTraySection = () => {
    return (
        <>
            {isSignedIn ?
                <section aria-label="Continue watching horzontal slider">
                    <TrayComponentText title={''}
                        disPlayContent={{
                            header: 'Continue Watching',
                            content: 'Start watching from where you left'
                        }}
                        progressBar={true}
                        redirecturl={'/contentdetails'}
                    />
                    {/* <TrayComponent title={'Continue watching'} progressBar={true} style={{}} displayTextOnCard={true} /> */}
                </section> : null
            }

            {
                <section aria-label="new release horzontal slider" style={{ marginTop: !isSignedIn ? '4%' : '' }}>
                    <TrayComponent
                        title={'New Releases'}
                        style={{}}
                        displayTextOnCard={true}
                        displayHoverState={true}
                        redirecturl={'/contentdetails'}
                    />
                </section>
            }

            {
                <section aria-label="trending movies section" className="trending-movies-container">
                    <TrendingNow title={"Trending Movies"} className={{}} />
                </section>
            }

            <section aria-label="horzontal slider with default title" className="horizontalTray">
                <TrayComponentText
                    title={''}
                    disPlayContent={{
                        header: 'Popular movies to watch now',
                        content: 'Most watched movies by days'
                    }}
                    viewAll={true}
                />
            </section>

            {
                <section aria-label="top listed movies of year">
                    <TrayComponentFilter
                        title={'2020 top Movies'}
                        redirecturl={'/contentdetails'}
                    />
                </section>
            }

        </>
    )
};

