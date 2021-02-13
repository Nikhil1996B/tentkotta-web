import { actionTypes } from './actions'

const initialState = {}

function subscriptionRequested(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SUBSCPTION_REQUESTED:
            return { ...state, emialaddress: action.payload }
        default:
            return state
    }
}

export default subscriptionRequested