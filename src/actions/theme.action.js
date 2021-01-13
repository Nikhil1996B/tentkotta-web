import { themesConstants } from "../constants";
import { themeService } from "../services";


export const themeActions = {
    themes
}

function themes(username, password) {
    return (dispatch) => {
        dispatch(request({ username }));
        themeService.theme(username, password).then(
            (theme) => {
                dispatch(success(theme));
            },
            (error) => {
                dispatch(failure(error.toString()));
                //dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user) {
        return { type: themesConstants.GET_THEME_REQUEST, user };
    }
    function success(theme) {
        return { type: themesConstants.GET_THEME_SUCCESS, theme };
    }
    function failure(error) {
        return { type: themesConstants.GET_THEME_FAILURE, error };
    }
}