import React, { useState, useEffect } from 'react';
import PromoCode from './promoCode';
import { useHistory } from 'react-router-dom';
import './style.scss';

export const PaymentOptions = () => {
    const history = useHistory();
    return (
        <>
            <section >
                <div className="tentkotta-sans-font-loaded">
                    <div className="basicLayout simplicity" dir="ltr">
                        <div className="simpleContainer">
                            <div className="centerContainer">
                                <div className="regFormContainer">
                                    <p>Step 3 of 3</p>
                                    <h2>Set up your payment.</h2>
                                    <p>
                                        <span className="gutter-padd">
                                            Your membership starts as soon as you set up payment.
                                         </span>
                                    </p>
                                    <p>
                                        <span className="emphasise">
                                            No commitments.
                                        </span>
                                    </p>
                                    <p>
                                        <span className="emphasise">
                                            Cancel online anytime.
                                        </span>
                                    </p>
                                    <div className="price-section">
                                        <div className="price-left-section">
                                            <div>
                                                $23.99
                                             </div>
                                            <div>
                                                3 Months
                                             </div>
                                        </div>
                                        <div className="price-right-section"
                                            onClick={() => { history.push('./membership') }}>
                                            <span>
                                                Change
                                            </span>
                                        </div>
                                    </div>
                                    <div className="promobtn">
                                        <PromoCode />
                                    </div>
                                    <p className="card-price-section" onClick={()=>{history.push('./stripecheckout')}}>
                                        <span className="card-left-section">
                                            <span>
                                                Credit Card / Debit Card
                                             </span>
                                        </span>
                                        <span className="card-right-section">
                                            <span>
                                                &#62;
                                            </span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default PaymentOptions