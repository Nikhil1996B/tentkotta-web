import React, { useEffect } from 'react';
import checkLogo from './assets/checkLogo.png';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { signupActions } from './actions';
require("./subscribeActiate.scss");
require("./style.scss");
function Subscription() {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleOnClick = () => {
        return history.push('./signIn');
    }

    useEffect(() => {
        dispatch(signupActions.resetSignUpParams());
        return () => {
        }
    }, [])

    return (
        <div className="tentkotta-sans-font-loaded subscribed-container">
            <div className="basicLayout simplicity" dir="ltr">
                <div className="simpleContainer">
                    <div className="centerContainer">
                        <div className="regContainer">
                            <div className="stepHeader-container">
                                <div className="stepHeader">
                                    <img src={checkLogo} alt="checkLogo" />
                                    <h3>Subscription Activated!</h3>
                                    <p >Start enjoying your favorite <br></br> movies at Tentkotta</p>
                                    <div
                                        className="submitBtnContainer"

                                    >
                                        <button onClick={handleOnClick} className="tk-btn tk-btn-primary tk-btn-solid tk-btn-oversize">Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscription;