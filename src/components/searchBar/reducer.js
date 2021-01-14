import { types } from './actions'

const search = (state = {}, action) => {
    switch (action.type) {
        case types.GET_SEARCH_SUCCESS:
            return action
        default:
            return state
    }
}

export default search