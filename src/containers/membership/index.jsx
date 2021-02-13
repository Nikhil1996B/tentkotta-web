import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.scss';
import MainHeader from '../../components/Header';
import Footer from '../../components/Footer/footer';

const Cards = () => {
    const membershipdetails = [
        {
            title: 'Monthly',
            text: 'Subscription for monthly. Auto renews every month',
            currency: '$',
            main: '9.99',
            price: '$119.88 Save $79.99',
            btnTxt: 'SUBSCRIBE'
        },
        {
            title: 'Anually',
            text: 'Subscription for Anually. Auto renews every month',
            currency: '$',
            main: '29.99',
            price: '$119.88 Save $109.99',
            btnTxt: 'SUBSCRIBE'
        },
        {
            title: 'weekly',
            text: 'Subscription for weekly. Auto renews every month',
            currency: '$',
            main: '39.99',
            price: '$119.88 Save $79.99',
            btnTxt: 'SUBSCRIBE'
        },
        {
            title: 'For one day',
            text: 'Subscription For one day. Auto renews every month',
            currency: '$',
            main: '49.99',
            price: '$119.88 Save $79.99',
            btnTxt: 'SUBSCRIBE'
        }
    ]
    return (
        <div className="card-container">
            {membershipdetails.map(membership => (
                < div className="cards">
                    <div className="rightsection">
                        <p className="card-title"><span>{membership.title}</span></p>
                        <p className="card-text">{membership.text}</p>
                    </div>
                    <div className="leftsection">
                        <p className="card-price">
                            <sup className="currency">{membership.currency}
                            </sup><span className="main">{membership.main}</span>
                        </p>
                        <p className="card-text">{membership.price}</p>
                    </div>
                    <button className="card-button">{membership.btnTxt}</button>
                </div>
            ))
            }

        </div >
    )
}


const ChoosePlanDetails = () => {

    const checkSvg = () => {
        return (
            <svg viewBox="0 0 24 24" class="checkmark-group--icon" aria-hidden="true">
                <path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
            </svg>
        )
    }
    return (
        <section className="container">
            <div>
                <p>Step 2 of 3</p>
                <h2>Choose the plan that’s right for you</h2>
                <p>
                    {checkSvg()}
                    <span className="checkmark-group--text">Downgrade or upgrade at any time.</span>
                </p>
                <p>
                    {checkSvg()}
                    <span className="checkmark-group--text">No commitments, cancel anytime.</span></p>
                <p>
                    {checkSvg()}
                    <span className="checkmark-group--text">Everything on Tentkotta for one low price.</span>
                </p>
                <p>
                    {checkSvg()}
                    <span classNamecon="checkmark-group--text">No ads and no extra fees. Ever.</span>
                </p>
            </div>
            <Cards />
        </section>
    )
}

function MemberShip() {
    const [show, setShow] = useState(false);
    const [Navshow, setNavShow] = useState(false);
    const [displayFullSideNav, setdisplayFullSideNav] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const handleModal = () => setShow(true);

    const dispatch = useDispatch();

    const themes = useSelector(state => state.ThemeReducer);
    const handleSignInClick = () => {

    }
    return (
        <>
            <main className="membership-background" style={{}} >
                <header aria-label="main header section for membership page">
                    <MainHeader Navshow={Navshow}
                        btnTxt={"Sign Out"}
                        handleNavModal={handleNavModal}
                        themes={themes}
                        searchVisibilty={false}
                        dispayBtn={false}
                        handleSignInClick={handleSignInClick}
                    />
                </header>
                <ChoosePlanDetails />
            </main>
            <Footer />
        </>
    )
};

export default MemberShip;