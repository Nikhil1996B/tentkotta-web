// import { createSelector } from 'reselect';
// TODO -- replace with useselector from react redux
//const list = useSelector(state => state.list);

export const getInfoState = state => {
    return state.videoInfo.cast
}

export const getMovieState = state => {
    return state.videoInfo.movie
}

export const getRecommState = state => {
    return state.videoInfo.recommendation
}
