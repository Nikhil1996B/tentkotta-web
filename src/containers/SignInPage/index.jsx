import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainHeader from '../../components/Header';
import Footer from '../../components/Footer/footer';
import SignIn from '../../components/Forms/SignIn';
import { pathOr } from 'ramda';

require('./style.scss');


function SignInPage() {
    const [show, setShow] = useState(false);
    const [showMoviesCategory, setShowMoviesCategory] = useState(false)
    const [Navshow, setNavShow] = useState(false);
    const [displayFullSideNav, setdisplayFullSideNav] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const handleModal = () => setShow(true);
    const history = useHistory();
    const dispatch = useDispatch();

    const themes = useSelector(state => state.ThemeReducer);
    return (
        <>
            <main className="SignIn-background" style={{}} >
                <header aria-label="main header section on sign in page">
                    <MainHeader Navshow={Navshow}
                        btnTxt={"SIGN UP"}
                        handleNavModal={handleNavModal}
                        themes={themes}
                        searchVisibilty={false}
                        handleSignInClick={() => { history.push('/signUp'); dispatch({ type: 'RESET_SIGNUP_AFTER_ACTIVATION' }) }}
                    />
                </header>
                <SignIn
                />
            </ main>
            <Footer />
        </>
    )
}

export default SignInPage;