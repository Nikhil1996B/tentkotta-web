import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PaymentOptions from '../../components/Forms/PaymentOptions';
import MainHeader from '../../components/Header';
import Footer from '../../components/Footer/footer';


const PaymentSelectionPage = () => {
    const [show, setShow] = useState(false);
    const [Navshow, setNavShow] = useState(false);
    const [displayFullSideNav, setdisplayFullSideNav] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const handleModal = () => setShow(true);

    const dispatch = useDispatch();

    const themes = useSelector(state => state.ThemeReducer);
    return (
        <>
            <main className="payment-background">
                <header aria-label="main header section for membership page">
                    <MainHeader Navshow={Navshow}
                        btnTxt={""}
                        handleNavModal={handleNavModal}
                        themes={themes}
                        searchVisibilty={false}
                    />
                </header>
                <PaymentOptions />
            </main>
            <Footer />
        </>
    )
};

export default PaymentSelectionPage;