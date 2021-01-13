import { connect } from 'react-redux';
import VideoInfoPage from './VideoInfoPage'
import { videoInfo } from './actions'
import { getInfoState, getMovieState, getRecommState } from './selector'

const mapStateToProps = state => {
    return {
        cast: getInfoState(state),
        movies: getMovieState(state),
        continueWaching: getRecommState(state)
    }
}

export default connect(mapStateToProps, { videoInfo })(VideoInfoPage)