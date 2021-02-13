import React, { Component } from 'react'
import loadingspiner from './loading-spinner.gif'
import Loader from 'react-loader-spinner';

require('./style.scss')
export class LoadingSpinner extends Component {
    render() {
        return (
            <div className="spinner-container">
                <Loader type="Circles" color="#E1540F" height={80} width={80} />
                <p>{this.props.text ? this.props.text : 'Please wait'}</p>
            </div>
        )
    }
}

export default LoadingSpinner
