import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainHeader from '../../components/Header';
import Footer from '../../components/Footer/footer';
import SignUp from '../../components/Forms/SignUp';
import { signinActions } from '../../components/Forms/SignIn/actions';

require('./style.scss');


function SignUpPage() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const [showMoviesCategory, setShowMoviesCategory] = useState(false)
    const [Navshow, setNavShow] = useState(false);
    const [displayFullSideNav, setdisplayFullSideNav] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const handleModal = () => setShow(true);

    const dispatch = useDispatch();

    const themes = useSelector(state => state.ThemeReducer);

    const handleSignInClick = () => {
        dispatch(signinActions.resetSignInParams());
        history.push('./signIn')
    }

    return (
        <>
            <main className="SignUp-background" style={{}} >
                <header aria-label="main header section on sign in page">
                    <MainHeader
                        Navshow={Navshow}
                        handleNavModal={handleNavModal}
                        themes={themes}
                        searchVisibilty={false}
                        handleSignInClick={handleSignInClick}
                    />
                </header>
                <SignUp
                />
            </ main>
            <Footer />
        </>
    )
}

export default SignUpPage;