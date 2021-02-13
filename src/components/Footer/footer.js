import React from 'react';
import { useSelector } from 'react-redux';
import pathOr from "ramda/src/pathOr";
import facebookimg from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import twittersign from './assets/twitter-sign.svg';

require('./footer.scss');

function Footer() {
    // Sector for themes
    const themes = useSelector(state => state.ThemeReducer)

    // header layout
    const headerLayout = pathOr({}, ['layout', 'header'], themes)


    // logo - currying technique
    const facebook = pathOr('', ['icons', 'facebook'])(themes)
    const google = pathOr('', ['icons', 'google'])(themes)
    return (
        <footer className="footer" id="footer">
            <nav className="footer-cols" aria-label="Footer navigation links">
                <ul>
                    <li><p>Quick Links</p></li>
                    <li><a href="/terms-of-use">Terms of Use</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#footer">FAQ</a></li>
                </ul>
                <ul>
                    <li>
                        <a href="#footer">
                            <p>Support (24X7)</p>
                        </a>
                    </li>
                    <li>Write us : support@tentkotta.com</li>
                    <li>Call us : 1-425-947-3022</li>
                </ul>
                <ul>
                    <li>
                        <p className="icons">
                            <span>
                                <img src={facebookimg} alt="visit our facebook page" style={{
                                    width: '46px',
                                    height: '46px',
                                    marginRight: '4%'
                                }} />
                            </span>
                            <span> <img src={instagram} alt="visit our instagram page" style={{
                                width: '46px',
                                height: '46px',
                                marginRight: '4%'

                            }} /></span>
                            <span> <img src={twittersign} alt="visit our twitter page" style={{
                                width: '46px',
                                height: '46px',
                                marginRight: '4%'

                            }} /></span>
                        </p>
                    </li>
                </ul>
            </nav>
            <p className="callus">Copyright 2021 @ Tentkotta</p>
        </footer>
    )
}

export default Footer;