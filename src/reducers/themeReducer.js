import { types } from '../actions/theme.action';
import { themesConstants } from "../constants";

const ThemeReducer = (state = {}, action) => {
    switch (action.type) {
        case themesConstants.GET_THEME_REQUEST:
            return { loading: true }
        case themesConstants.GET_THEME_FAILURE:
            return { ...action.theme, loading: false }
        case themesConstants.GET_THEME_SUCCESS:
            return { ...action.theme, loading: false }
        default:
            return state
    }
}

export default ThemeReducer