

import { types } from './constants';

const initialState = {}

export default function resetPwdReducer(state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_PASSWORD_RESET:
            return { ...state, loading: true, error: null }
        case types.PASSWORD_RESET_SUCCESS:
            return { ...state, status: action.user, loading: false, error: null }
        case types.PASSWORD_RESET_FAILURE:
            return { ...state, continueWaching: action.payload, loading: false, error: action.user }
        default:
            return state;
    }
}
