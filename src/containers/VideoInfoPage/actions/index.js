import { types } from './types';

// TODO - Following imports to be removed and the data to be fetched from actual HTTP call to service
import castMock from '../__mock/cast';
import movie from '../__mock/movies'
import continueWaching from '../__mock/continuewatching'

// action creator
const doCastInfoItem = payload => ({ type: types.GET_CAST, payload });

const movieinfo = payload => ({ type: types.GET_MOVIES, payload });

const continueWachingMovieInfo = payload => ({ type: types.GET_RECOMMENDATION, payload })

export const videoInfo = () => async (dispatch) => {
    dispatch(movieinfo(movie))
    dispatch(continueWachingMovieInfo(continueWaching))
};
