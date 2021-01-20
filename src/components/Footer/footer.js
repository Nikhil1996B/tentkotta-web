import React from 'react'

require('./footer.scss')

function Footer() {
    return (
        <footer className="footer" id="footer">
            <p className="callus">Questions? Call +91-XX6-579-XXX</p>
            <div className="footer-cols">
                <ul>
                    <li><a href="#footer">FAQ</a></li>
                    <li><a href="#footer">Investor Relations</a></li>
                    <li><a href="#footer">Ways To Watch</a></li>
                    <li><a href="#footer">Corporate Information</a></li>
                    <li><a href="#footer">Originals</a></li>
                </ul>
                <ul>
                    <li><a href="#footer">Help Center</a></li>
                    <li><a href="#footer">Terms Of Use</a></li>
                    <li><a href="#footer">Contact Us</a></li>
                </ul>
                <ul>
                    <li><a href="#footer">Account</a></li>
                    <li><a href="#footer">Redeem Gift Cards</a></li>
                    <li><a href="#footer">Privacy</a></li>
                    <li><a href="#footer">Speed Test</a></li>
                </ul>
                <ul>
                    <li><a href="#footer">Media Center</a></li>
                    <li><a href="#footer">Buy Gift Cards</a></li>
                    <li><a href="#footer">Cookie Preferences</a></li>
                    <li><a href="#footer">Legal Notices</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer