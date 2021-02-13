import { signUpConstants } from "./constants";

const initialState = {

}

function SignUpReducer(state = initialState, action) {
    switch (action.type) {
        case signUpConstants.SIGNUP_SUCCESS:
            return { ...state, emailaddress: action.user, isExists: action.isExists, loading: false }
        case signUpConstants.SIGNUP_REQUEST:
            return { ...state, loading: true }
        case signUpConstants.SIGNUP_FAILURE:
            return { ...state, error: action.error, loading: false }
        case signUpConstants.RESET_SIGNUP:
            return { ...state, error: null }
        case signUpConstants.RESET_SIGNUP_AFTER_ACTIVATION:
            return { ...state, error: null, emailaddress: null }
        default:
            return state
    }
}

export default SignUpReducer