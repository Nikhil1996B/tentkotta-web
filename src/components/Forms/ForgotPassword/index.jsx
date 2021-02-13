import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useLocation, useHistory } from 'react-router-dom';
import { pathOr } from 'ramda';
import LoadingSpinner from "../../../UI_Frontendlib/atoms/loadingSpinner";
import { signinActions } from '../SignIn/actions';
import { apiTokenActions } from "../../../actions/apiToken.action";
import { rules } from '../../../helpers/rules';
import { MessageContent } from '../SignIn/index';
require('../SignIn/style.scss');

function ForgotPassword() {
    const [inputs, setInputs] = useState({
        email: ""
    });
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const [emailAddressEntered, setEmailEnteredState] = useState(false);
    const { handleSubmit, register, errors } = useForm();
    const forgotPasswordEmailStatus = useSelector(state => pathOr('', ['SignInReducer', 'forgotpasswordreq', 'records', 'responseCode'])(state));
    const forgotPasswordEmailStatusMessage = useSelector(state => pathOr('', ['SignInReducer', 'forgotpasswordreq', 'records', 'message'])(state));
    const onSubmit = values => {
        setInputs({ ...inputs, email: values.email });

        if (!inputs.email) {
            setEmailEnteredState(true);
            return;
        }

        dispatch(signinActions.resetPwdEmailSend(inputs.email));
        setEmailEnteredState(false);
    };

    useEffect(() => {
        dispatch({ type: "RESET_SIGIN" });
    }, []);
    return (
        <>
            <style type="text/css">
                {`
                label {
                  display: flex;
                         }   
                 `}
            </style>
            <div>
                <div className="tentkotta-sans-font-loaded">
                    <div className="basicLayout simplicity" dir="ltr">
                        <div className="simpleContainer">
                            <div className="centerContainer">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="regFormContainer">
                                        {emailAddressEntered &&
                                            <MessageContent>
                                                {'Email-address required. Please enter the email address to reset password.'}
                                            </MessageContent>}
                                        {forgotPasswordEmailStatus == 200 &&
                                            <MessageContent>
                                                {`We have sent a reset password link to your e-mail address. ${forgotPasswordEmailStatusMessage}`}
                                            </MessageContent>
                                        }
                                        <div className="stepHeader-container">
                                            <div className="stepHeader">
                                                <h1 className="stepTitle">
                                                    {'Forgot Password'}
                                                </h1>
                                                <p>{'Enter your email address to reset the password.'}</p>
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
                                            {`SUBMIT`}
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

export default ForgotPassword;