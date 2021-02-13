import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import MainHeader from '../../components/Header'
import Footer from '../../components/Footer/footer'
import Subscription from '../../components/Forms/SignUp/subscriptionActivated'
import { signinActions } from '../../components/Forms/SignIn/actions'

require('./style.scss');

function SubscriptionActivated() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const [showMoviesCategory, setShowMoviesCategory] = useState(false)
    const [Navshow, setNavShow] = useState(false);
    const [displayFullSideNav, setdisplayFullSideNav] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const handleModal = () => setShow(true);

    const dispatch = useDispatch();

    const themes = useSelector(state => state.ThemeReducer);

    return (
        <>
            <main className="Subscription-activated" style={{}} >
                <header aria-label="main header section on subscription activation screen">
                    <MainHeader Navshow={Navshow}
                        handleNavModal={handleNavModal}
                        themes={themes}
                        searchVisibilty={false}
                        btnTxt={""}
                    />
                </header>
                <Subscription
                />
            </ main>
            <Footer />
        </>
    )
}

export default SubscriptionActivated;