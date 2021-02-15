import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from 'react-router-dom';
import { signinActions } from './actions';
import { signupActions } from '../SignUp/actions';
import { apiTokenActions } from "../../../actions/apiToken.action";
import LoadingSpinner from "../../../UI_Frontendlib/atoms/loadingSpinner";
import { pathOr } from 'ramda';
import { equals } from 'ramda';
import { isSignedIn, signedIn } from './authentication';
import { rules } from '../../../helpers/rules';
import { SignInGlobalStyle } from './signinstyle';

require('./style.scss');

export const MessageContent = ({ isExist, children }) => {
    const dispatch = useDispatch();
    return (
        <div className="ui-message-container ui-message-error">
            <div data-uia="text" className="ui-message-contents">
                {children ? children : (
                    <div onClick={() => { dispatch({ type: 'RESET_SIGNUP_AFTER_ACTIVATION' }) }}>
                        {`Sorry, we can't find an account with this email address. Please try again or
                             ${" "}`}
                        < a href="/signUp">create a new account</a>
                    </div>
                )}
            </div>
        </div >
    )
}


function SignIn() {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        // confirmpassword: "",
    });
    const [emailAddressEntered, setEmailEnteredState] = useState(false);

    const [displaySignBtn, setSignBtnDisplay] = useState(true);

    const [hasText, setHasText] = useState(false);

    // Resset on preauth successfull
    const [useExists, setUserExists] = useState(false);
    const [redirectPostSignIn, setredirection] = useState(false);

    // React form handle methods
    const { handleSubmit, register, errors } = useForm();

    // selectors
    const isExists = useSelector(state => pathOr(null, ['SignInReducer', 'emailaddress', 'isExists'])(state));
    const loading = useSelector(state => pathOr(false, ['SignInReducer', 'loading'])(state));
    const preEmailAuth = useSelector(state => pathOr('', ['SignInReducer', 'emailaddress', 'responseCode'])(state));
    const message = useSelector(state => pathOr('', ['SignInReducer', 'emailaddress', 'message'])(state));
    const emailAddress = useSelector(state => pathOr('', ['SignInReducer', 'emailaddress', 'username'])(state));
    const serverError = useSelector(state => pathOr('', ['SignInReducer', 'error'])(state));
    const reload = useSelector(state => pathOr('', ['SignInReducer', 'reload'])(state));
    const forgotPasswordEmailStatus = useSelector(state => pathOr('', ['SignInReducer', 'forgotpasswordreq', 'records', 'responseCode'])(state));
    const forgotPasswordEmailStatusMessage = useSelector(state => pathOr('', ['SignInReducer', 'forgotpasswordreq', 'records', 'message'])(state));

    // if the user is signed in the redirect them to home page, and is reload necessary, reload the page to effeciate the cookies on to browser
    useEffect(() => {
        if (isSignedIn) {
            return history.push('./home');
        }
        if (reload) {
            window.location.reload();
            dispatch({ type: "RESET_RELOAD_STATUS" })
        }
    }, [isSignedIn, reload]);

    useEffect(() => {
        if (message && message.toLowerCase().includes('user not found')) {
            dispatch({ type: 'RESET_SIGNUP_AFTER_ACTIVATION' });
            history.push('/signUp');
        }
    }, [message]);

    // Reset the toaster message display check on email verification check, on component mount / page refresh
    useEffect(() => {
        setEmailEnteredState(false);
        return () => {
        }
    }, []);

    const apiToken = pathOr('', ['apiToken'])(localStorage);

    // component did mount / initialiser contructor
    useEffect(() => {
        if (emailAddress && isExists) {
            setInputs({ ...inputs, email: emailAddress });
            setUserExists(isExists);
        }
        // if (serverError === "Unauthorized") {
        //     dispatch(apiTokenActions.login());
        // }

    }, []);

    // Dispatch api token login action when api token is unabavailable in local storage of browser
    useEffect(() => {
        if (!apiToken) {
            dispatch(apiTokenActions.login());
        }
    }, [apiToken]);



    // Use effect to wire signin button display on header
    useEffect(() => {
        if (location.pathname.toLowerCase().includes('signin')) {
            setSignBtnDisplay(false);
        }
        return () => {

        }
    }, [location])



    // effect for redirecting to home page post successful sign in
    useEffect(() => {
        if (redirectPostSignIn) {
            history.push("/home");
        }
        return () => {
            // clean up
        }
    }, [redirectPostSignIn])


    // watch state changes for serverError
    useEffect(() => {

        return () => {
            // clean up
        }
    }, [serverError, dispatch])

    // User Exists and pre email validation success 
    useEffect(() => {
        setUserExists(isExists);
        if (isExists === false) {
            // history.push('./signUp')
        }
    }, [isExists])

    if (loading) {
        return <LoadingSpinner />
    }

    const onSubmit = values => {
        if (isExists) {
            return dispatch(signinActions.signin(inputs.email, values.password));
        }
        dispatch(signinActions.preSignInAuth(inputs.email));
        setInputs({ ...inputs, email: values.email, password: values.password });
    };

    const handleForgotPassword = () => {
        return history.push('/forgotpassword');
    }

    const userGreetingsMessage = () => {
        return (
            (<><b>Hello {emailAddress}. Welcome back!</b>
                <p style={{ marginTop: '4%' }}>
                    Please Enter your password to Sign In to your account
                </p>
            </>)
        )
    };

    return (
        <div>
            <SignInGlobalStyle />
            <div className="tentkotta-sans-font-loaded">
                <div className="basicLayout simplicity" dir="ltr">
                    <div className="simpleContainer">
                        <div className="centerContainer">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="regFormContainer">
                                    {forgotPasswordEmailStatus == 200 &&
                                        <MessageContent>
                                            {forgotPasswordEmailStatusMessage}
                                        </MessageContent>
                                    }
                                    {isExists == false && <MessageContent />}
                                    {emailAddressEntered &&
                                        <MessageContent>
                                            {'Enter email address to reset passeword'}
                                        </MessageContent>}
                                    <div className="stepHeader-container">
                                        <div className="stepHeader">
                                            <h1 className="stepTitle">
                                                {!preEmailAuth == 200 || !preEmailAuth ?
                                                    'Enter your Email to Continue'
                                                    : userGreetingsMessage()
                                                }
                                            </h1>
                                        </div>
                                    </div>
                                    <div>
                                        <ul className="simpleForm structural ui-grid">
                                            <li className="tkFormSpace">
                                                <div className="tkInput ">
                                                    <div className="tkInputPlacement">
                                                        <label
                                                            className="input_id"
                                                            placeholder="email"
                                                        >
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={inputs.email}
                                                                className={`tkTextField`}
                                                                onChange={(e) => {
                                                                    setInputs({ ...inputs, [e.target.name]: e.target.value });
                                                                }}
                                                                id="id_email"
                                                                maxLength="50"
                                                                minLength="5"
                                                                ref={register({
                                                                    required: "E-mail ID is Required",
                                                                    pattern: {
                                                                        value: pathOr(null, ['validation', 'email'])(rules),
                                                                        message: "invalid email address",
                                                                    }
                                                                })}
                                                            />
                                                            {errors.email &&
                                                                <p
                                                                    style={{ color: 'red', fontSize: '10px' }}>
                                                                    {errors.email.message}
                                                                </p>
                                                            }
                                                            <label
                                                                htmlFor="id_email"
                                                                className="placeLabel">
                                                                Email
                                                            </label>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            {isExists ?
                                                (<li className="tkFormSpace">
                                                    <div className="tkInput tkInputOversize">
                                                        <div className="tkInputPlacement">
                                                            <label className="input_id"
                                                                placeholder="password"
                                                            >
                                                                <input
                                                                    type="password"
                                                                    name="password"
                                                                    className={`tkTextField`}
                                                                    id="id_password"
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
                                                                    htmlFor="id_password"
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
                                                ) : null
                                            }

                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="submitBtnContainer"
                                >
                                    <button
                                        type="submit"
                                        autoComplete="off"
                                        className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                                        placeholder="regForm_button_continue">
                                        {isExists ? 'Sign In' : `Continue`}
                                    </button>
                                </div>
                                <div className="forgotpassword">
                                    <span
                                        alt="forgot password"
                                        className="link-forgot-password"
                                        onClick={e => handleForgotPassword(e)}
                                    >
                                        Forgot Password ?
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;