import { combineReducers } from "redux";

import ThemeReducer from "./themeReducer"
import { videoInfo } from '../../src/containers/VideoInfoPage/reducers/reducer'
import homepageReducer from '../../src/containers/HomePage/reducers/reducer'
import search from '../components/searchBar/reducer'
import subscriptionRequested from '../components/HeroBannerWithIcon/reducer'
import SignInReducer from '../components/Forms/SignIn/reducer'
import SignUpReducer from '../components/Forms/SignUp/reducer'
import resetPwdReducer from '../containers/ResetPassword/reducer'
import StaticContentReducer from '../containers/StaticPages/reducer'
// import { DATA_LOADING, DATA_LOADED, UPDATE_DATA } from "../actions/theme.action"
// import component reducers


const reducers = {
    ThemeReducer,
    StaticContentReducer,
    videoInfo,
    homepageReducer,
    search,
    subscriptionRequested,
    SignInReducer,
    SignUpReducer,
    resetPwdReducer
}

const rootReducer = combineReducers({ ...reducers });
export default rootReducer


// export const createReducer = asyncReducers => {
//     return combineReducers({
//         ...asyncReducers
//     });
// };