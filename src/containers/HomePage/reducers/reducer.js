import { types } from '../actions/types'

const initialState = {}

export default function homepageReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_RECOMMENDEDMOVIES:
            return { ...state, movies: action.payload, loading: false, error: null }
        case types.GET_CONTINUEWATCHING:
            return { ...state, continueWaching: action.payload, loading: false, error: null }
        default:
            return state;
    }
}
