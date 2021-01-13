import { types } from './types';

// TODO - Following imports to be removed and the data to be fetched from actual HTTP call to service
import movie from '../../VideoInfoPage/__mock/movies'
import continueWaching from '../../VideoInfoPage/__mock/continueWatchinghome'



export const videoInfo = () => async (dispatch) => {
    dispatch(popularMovie(movie))
    dispatch(getRecommendationMovies(continueWaching))
};

// Action creator
const popularMovie = payload => ({ type: types.GET_CONTINUEWATCHING, payload });

const getRecommendationMovies = payload => ({ type: types.GET_RECOMMENDEDMOVIES, payload })