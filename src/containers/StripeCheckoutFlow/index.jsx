import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainHeader from '../../components/Header';
import StripeCheckoutForm from '../../components/StripeCheckout/index';
import Footer from '../../components/Footer/footer';
import './style.scss';

const StripeCheckoutFlow = () => {
    const dispatch = useDispatch();
    const themes = useSelector(state => state.ThemeReducer);
    return (
        <>
            <main className="payment-background">
                <header aria-label="main header section for membership page">
                    <MainHeader
                        btnTxt={""}
                        themes={themes}
                        searchVisibilty={false}
                    />
                </header>
                <div className="tentkotta-sans-font-loaded">
                    <div className="basicLayout simplicity" dir="ltr">
                        <div className="simpleContainer">
                            <div className="centerContainer">
                                <div className="regFormContainer">
                                    <p>Step 3 of 3</p>
                                    <h2>Set up your credit or debit card.</h2>
                                    <StripeCheckoutForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default StripeCheckoutFlow;