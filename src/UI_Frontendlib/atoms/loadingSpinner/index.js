import React, { Component } from 'react'
import loadingspiner from './loading-spinner.gif'
import Loader from 'react-loader-spinner';

require('./style.scss')
export class LoadingSpinner extends Component {
    render() {
        return (
            <div className="spinner-container">
                <Loader type="Circles" color="#00BFFF" height={80} width={80} />
            </div>
        )
    }
}

export default LoadingSpinner
