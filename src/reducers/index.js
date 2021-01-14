import { combineReducers } from "redux";

import ThemeReducer from "./themeReducer"
import { videoInfo } from '../../src/containers/VideoInfoPage/reducers/reducer'
import homepageReducer from '../../src/containers/HomePage/reducers/reducer'
import search from '../components/searchBar/reducer'
// import { DATA_LOADING, DATA_LOADED, UPDATE_DATA } from "../actions/theme.action"
// import component reducers


const rootReducer = combineReducers({ ThemeReducer, videoInfo, homepageReducer, search });
export default rootReducer


// export const createReducer = asyncReducers => {
//     return combineReducers({
//         ...asyncReducers
//     });
// };