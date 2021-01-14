import * as Movies from '../Carosal/api/Movies';

export const types = {
    GET_SEARCH_MOVIES: 'GET_SEARCH_MOVIES',
    GET_SEARCH_SUCCESS: 'GET_SEARCH_SUCCESS',
    GET_SEARCH_FAULURE: 'GET_SEARCH_FAULURE',
}


export const searchActions = {
    SearchReq
}

function SearchReq(query) {

    return (dispatch) => {
        Movies.search(query).then(res => dispatch(success({ fetchedMovies: res, movieSearched: true })));
    };

    function request(res = []) {
        return { type: types.GET_SEARCH_MOVIES, res };
    }
    function success(records = []) {
        return { type: types.GET_SEARCH_SUCCESS, records };
    }
    function failure(error) {
        return { type: types.GET_SEARCH_FAULURE, error };
    }
}