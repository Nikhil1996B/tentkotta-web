import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from '../../components/Footer/footer';
import MainHeader from '../../components/Header';
import ForgotPasswordComponent from '../../components/Forms/ForgotPassword';
import './style.scss';

export default function ForgotPassword() {
    const themes = useSelector(state => state.ThemeReducer);

    return (
        <>
            <main className="forgotpassword-background" style={{}}>
                <header aria-label="main header section">
                    <MainHeader
                        themes={themes}
                        btnTxt={''}
                        dispayBtn={false}
                        searchVisibilty={false}
                    />
                </header>
                <ForgotPasswordComponent />
            </main>
            <Footer />
        </>
    )
}
