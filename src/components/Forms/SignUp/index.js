import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import { signupActions } from './actions';
import { MessageContent } from "../SignIn/index";
import { apiTokenActions } from "../../../actions/apiToken.action";
import LoadingSpinner from "../../../UI_Frontendlib/atoms/loadingSpinner";
import { rules } from '../../../helpers/rules';
import { isSignedIn, signedIn } from '../SignIn/authentication';
import { SignUpGlobalStyle } from './signupstyle';

require('./style.scss');

function SignUp() {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        // confirmpassword: "",
    });

    const emailAddress = useSelector(state => pathOr('', ['subscriptionRequested', 'emialaddress', 'email'])(state));
    const error = useSelector(state => pathOr('', ['SignUpReducer', 'error'])(state));
    const responseCode = useSelector(state => pathOr(null, ['SignUpReducer', 'emailaddress', 'responseCode'])(state));
    const signinusername = useSelector(state => pathOr(null, ['SignInReducer', 'emailaddress', 'username'])(state));
    const message = useSelector(state => pathOr(null, ['SignInReducer', 'emailaddress', 'message'])(state));
    const username = useSelector(state => pathOr(null, ['SignUpReducer', 'emailaddress', 'username'])(state));
    const loading = useSelector(state => pathOr(false, ['SignUpReducer', 'loading'])(state));
    const reload = useSelector(state => pathOr('', ['SignInReducer', 'reload'])(state));

    const [hasText, setHasText] = useState(false);

    const apiToken = pathOr('', ['apiToken'])(localStorage);
    // Resset on preauth successfull
    const [useExists, setUserExists] = useState(false);
    const [redirectPostSignIn, setredirection] = useState(false);

    // React form handle methods
    const { handleSubmit, register, errors } = useForm();

    const validateResponseCode = () => {
        return responseCode == 200
    }

    const onSubmit = values => {
        if (validateResponseCode()) {
            return history.push('./ChooseSubscriptionPlan');
        }

        dispatch(signupActions.signup(inputs.email, values.password))
        setInputs({ ...inputs, email: values.email, password: values.password });
    };

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


    // useEffect for emailAddress
    useEffect(() => {
        if (responseCode == 200) {
            dispatch({ type: 'RESET_SIGNUP_AFTER_ACTIVATION' });
            return history.push('./home');
        }
        if (!emailAddress) return;
        setInputs({ ...inputs, email: emailAddress });
    }, [emailAddress, responseCode])


    useEffect(() => {
        if (message && message.toLowerCase().includes('user not found')) {
            setInputs({ ...inputs, email: signinusername });
        }
    }, [signinusername])

    // ON Successful signup and redirection to sign in reset the previous signup state
    const handleSignUpSuccess = () => {
        setInputs(...inputs, { email: '', password: '' })
        return dispatch(signupActions.resetSignUpParams());
    }

    // Dispatch api token login action when api token is unabavailable in local storage of browser
    useEffect(() => {
        if (!apiToken) {
            dispatch(apiTokenActions.login());
        }
    }, [apiToken])


    const emailExistMessage = (error) => {
        return (
            <>
                <span>{error}</span>{" "}
               Please try < a href="/signIn">signing in</a>
            </>
        )
    }

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <>
            <SignUpGlobalStyle />
            <div>
                <div className="tentkotta-sans-font-loaded">
                    <div className="basicLayout simplicity" dir="ltr">
                        <div className="simpleContainer">
                            <div className="centerContainer">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="regFormContainer">
                                        {
                                            error && <MessageContent>
                                                {
                                                    error.includes('exists') && responseCode
                                                        ? emailExistMessage(error)
                                                        : error
                                                }
                                            </MessageContent>
                                        }

                                        {
                                            responseCode == 200 &&
                                            <MessageContent>
                                                {`Congratulations ${username}! User created successfully. Please sign In following this link`}
                                                {" "}< a href="/signIn" onClick={() => handleSignUpSuccess()}>Sign In to your account</a>
                                            </MessageContent>
                                        }

                                        <div className="stepHeader-container">
                                            <div className="stepHeader">
                                                <p className="step-indicator">Step 1 of 3</p>
                                                <h1 className="stepTitle">
                                                    Create a password to start your membership.
                                            </h1>
                                                <p>Just a few more steps and you're done! We hate paperwork, too.</p>
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
                                                                    className={`tkTextField`}
                                                                    id="id_email"
                                                                    maxLength="50"
                                                                    minLength="5"
                                                                    value={inputs.email}
                                                                    onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })}
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
                                                <li className="tkFormSpace">
                                                    <div className="tkInput ">
                                                        <div className="tkInputPlacement">
                                                            <label
                                                                className="input_id"
                                                                placeholder="mobile number(optional)"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    name="phone"
                                                                    className={`tkTextField ${hasText ? 'hasText' : ''}`}
                                                                    id="id_phone"
                                                                    maxLength="50"
                                                                    minLength="5"
                                                                    ref={register({
                                                                        // required: "phone number Required",
                                                                        pattern: {
                                                                            value: pathOr(null, ['validation', 'phoneNumber'])(rules),
                                                                            message: "invalid phone number",
                                                                        }
                                                                    })}
                                                                />
                                                                {errors.phone &&
                                                                    <p
                                                                        style={{ color: 'red', fontSize: '10px' }}>
                                                                        {errors.phone.message}
                                                                    </p>
                                                                }
                                                                <label
                                                                    htmlFor="id_phone"
                                                                    className="placeLabel">
                                                                    Mobile Number (Optional)
                                                            </label>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="tkFormSpace">
                                                    <div className="tkInput tkInputOversize">
                                                        <div className="tkInputPlacement">
                                                            <label className="input_id"
                                                                placeholder="password"
                                                            >
                                                                <input
                                                                    type="password"
                                                                    name="password"
                                                                    className={`tkTextField ${hasText ? 'hasText' : ''}`}
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
                                                                    className={`placeLabel`}>
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
                                    </div>
                                    <div
                                        className="submitBtnContainer"
                                    >
                                        <button
                                            type="submit"
                                            autoComplete="off"
                                            className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize"
                                            placeholder="regForm_button_continue">
                                            {useExists ?
                                                'Sign Up' :
                                                validateResponseCode()
                                                    ? 'Choose Subscription plan'
                                                    : `Continue`
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;