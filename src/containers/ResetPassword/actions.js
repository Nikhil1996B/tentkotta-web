import { types } from './constants.js';
import { signinService } from '../../../src/services/index';

export const resetPasswordActions = {
    resetPassword
}

function resetPassword(code, password) {
    return (dispatch) => {
        dispatch(request({}));
        signinService.resetPassword(code, password).then(
            (user) => {
                dispatch(success(user));
            },
            (error) => {
                dispatch(failure(error.toString()));
                //dispatch(alertActions.error(error.toString()));
            }
        );
    }
}
function request(user) {
    return { type: types.REQUEST_PASSWORD_RESET, user };
}
function success(user) {
    return { type: types.PASSWORD_RESET_SUCCESS, user };
}
function failure(error) {
    return { type: types.PASSWORD_RESET_FAILURE, error };
}