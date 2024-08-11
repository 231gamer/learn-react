import React from "react";
import face_logo from '../assets/facebook-icon.png'
import github_logo from '../assets/github-icon.png'
import instagram_logo from '../assets/instagram-icon.png'
import twitter_logo from '../assets/twitter-icon.png'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-items">
                <img src={face_logo} className="footer-image" />
                <img src={twitter_logo} className="footer-image" />
                <img src={instagram_logo} className="footer-image" />
                <img src={github_logo} className="footer-image" />
            </div>
        </div>
    )
}

export default Footer