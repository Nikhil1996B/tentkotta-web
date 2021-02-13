import { signUpConstants } from "../Forms/SignUp/constants"

export const actionTypes = {
    SUBSCPTION_REQUESTED: 'SUCBSCRIPTION_REQUESTED'
}

export const subscribeAction = {
    subscriptionRequested,
    resetSignUpParams
}

function subscriptionRequested(emailaddress) {
    return dispatch => {
        dispatch(subscription(emailaddress));
    }
}

function subscription(payload) {
    return { type: actionTypes.SUBSCPTION_REQUESTED, payload }
}

// Reset SignUp
function resetSignUpParams() {
    return { type: signUpConstants.RESET_SIGNUP };
}
