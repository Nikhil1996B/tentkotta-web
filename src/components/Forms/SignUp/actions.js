import { signUpService } from "../../../services";
import { signUpConstants } from "./constants";


export const signupActions = {
    signup,
    resetSignUpParams
}

function signup(username, password) {
    return (dispatch) => {
        dispatch(request({ username }));
        signUpService.signUp(username, password).then(
            (user) => {
                dispatch(success({ username, ...user }));
            },
            (error) => {
                dispatch(failure(error.toString()));
                //dispatch(alertActions.error(error.toString()));
            }
        );
    };


}
function request(user) {
    return { type: signUpConstants.SIGNUP_REQUEST, user };
}
function success(user) {
    return { type: signUpConstants.SIGNUP_SUCCESS, user };
}
function failure(error) {
    return { type: signUpConstants.SIGNUP_FAILURE, error };
}

// Reset SigUp
function resetSignUpParams() {
    return { type: signUpConstants.RESET_SIGNUP_AFTER_ACTIVATION };
}
