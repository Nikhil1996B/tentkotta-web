import { types } from '../actions/theme.action';
import { themesConstants } from "../constants";

const ThemeReducer = (state = {}, action) => {
    switch (action.type) {
        case themesConstants.GET_THEME_SUCCESS:
            return action.theme
        default:
            return state
    }
}

export default ThemeReducer