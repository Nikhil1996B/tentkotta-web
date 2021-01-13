import React, { Component } from 'react'
import Logo from './../../../assets/graphics/background-layout.png'
import './style.scss'
class Header extends Component {
    render() {
        return (
            <header data-test='headerComponent'>
                <div className="showcase-top">
                    <a href="#" className="btn btn-rounded">Sign In</a>
                </div>
            </header>
        )
    }
}

export default Header
