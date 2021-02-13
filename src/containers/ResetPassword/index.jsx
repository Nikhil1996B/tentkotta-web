import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./style.scss";
import { useHistory } from 'react-router-dom';
import MainHeader from '../../components/Header';
import Footer from '../../components/Footer/footer';
import { useForm } from "react-hook-form";
import { resetPasswordActions } from "./actions";
import { useLocation, useParams } from "react-router-dom";
import LoadingSpinner from "../../UI_Frontendlib/atoms/loadingSpinner";
import { MessageContent } from "../../components/Forms/SignIn/index";
import { pathOr } from 'ramda';


function ResetPassword() {
    const [show, setShow] = useState(false);
    const [oobCode, setoobCode] = useState('');
    const [Navshow, setNavShow] = useState(false);
    const [displayFullSideNav, setdisplayFullSideNav] = useState(false);
    const handleNavModal = () => setNavShow(!Navshow);
    const handleModal = () => setShow(true);

    const history = useHistory();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        password: "",
    });
    const themes = useSelector(state => state.ThemeReducer);
    const status = useSelector(state => pathOr(null, ['resetPwdReducer', 'status', 'responseCode'])(state));
    const loading = useSelector(state => pathOr(false, ['resetPwdReducer', 'loading'])(state));
    const message = useSelector(state => pathOr('', ['resetPwdReducer', 'status', 'message'])(state));

    // React form handle methods
    const { handleSubmit, register, errors } = useForm();

    // On submit event handler
    const onSubmit = (values) => {
        // TODO: Reset password API call
        dispatch(resetPasswordActions.resetPassword(oobCode, values.resetpassword));
    }

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        for (const [key, value] of urlParams) {
            if (key.includes('oobCode')) {
                setoobCode(value);
            }
        }
        return () => {
        }
    }, [])

    const handleSigninClick = () => {
        return history.push('/signIn');
    }

    if (loading) {
        return <LoadingSpinner />
    }



    return (
        <>
            <main className="resetpassword">
                <header aria-label="main header section for membership page">
                    <MainHeader Navshow={Navshow}
                        btnTxt={"Sign In"}
                        handleNavModal={handleNavModal}
                        themes={themes}
                        searchVisibilty={false}
                        handleSignInClick={handleSigninClick}
                    />
                </header>
                <section>
                    <div className="tentkotta-sans-font-loaded">
                        <div className="basicLayout simplicity" dir="ltr">
                            <div className="simpleContainer">
                                <div className="centerContainer">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="regFormContainer">
                                            {message && <MessageContent>{status == 200 ?
                                                <div>
                                                    <span>Password reset successfully. Please click</span>
                                                    {" "}<a href="/signIn">Sign In</a> <span>to sign in</span>
                                                </div>
                                                :
                                                message}</MessageContent>}
                                            <div className="stepHeader-container">
                                                <div className="stepHeader">
                                                    <h1 className="stepTitle">
                                                        Please enter a password to reset
                                                    </h1>
                                                </div>
                                            </div>
                                            <ul className="simpleForm structural ui-grid">
                                                <li className="tkFormSpace">
                                                    <div className="tkInput tkInputOversize">
                                                        <div className="tkInputPlacement">
                                                            <label className="input_id"
                                                                placeholder="resetpassword"
                                                            >
                                                                <input
                                                                    type="password"
                                                                    name="resetpassword"
                                                                    className={`tkTextField`}
                                                                    id="resetpassword"
                                                                    autoComplete="password"
                                                                    maxLength="61"
                                                                    minLength="4"
                                                                    dir=""
                                                                    ref={register({
                                                                        required: "password is not filled",
                                                                        validate: value => value.length
                                                                    })}
                                                                />
                                                                <label
                                                                    htmlFor="resetpassword"
                                                                    className={'placeLabel'}>
                                                                    Password
                                                                 </label>
                                                                {
                                                                    errors.password &&
                                                                    <p
                                                                        style={{ color: 'red', fontSize: '10px' }}
                                                                    >
                                                                        {errors.password.message}
                                                                    </p>
                                                                }
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            className="submitBtnContainer"
                                        >
                                            <button
                                                type="submit"
                                                autoComplete="off"
                                                className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                                                placeholder="regForm_button_continue">
                                                {`Reset Password`}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ResetPassword;