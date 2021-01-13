import { types } from '../actions/types'

const initialState = {};

export function videoInfo(state = initialState, action) {
    switch (action.type) {
        case types.GET_CAST:
            return { ...state, cast: action.payload, loading: true, error: null }
        case types.GET_MOVIES:
            return { ...state, movie: action.payload, loading: true, error: null }
        case types.GET_RECOMMENDATION:
            return { ...state, recommendation: action.payload, loading: true, error: null }
        default:
            return state;
    }
}


export default videoInfo