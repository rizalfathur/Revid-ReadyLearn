import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLine, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content-container">
                <div className="img-container">
                    <img
                        className="img-fluid"
                        src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                        alt="logo"/>
                </div>
                <div className="footer-menu">
                    <h5>ReadyLearn</h5>
                    <a>Partnership</a>
                    <a>Tentang</a>
                    <a>Blog</a>
                </div>
                <div className="footer-menu">
                    <h5>Bantuan</h5>
                    <a>Kebijakan Privasi</a>
                </div>

                <div className="footer-menu medsos-container">
                    <h5>Media Sosial</h5>
                    <a className="medsos youtube">
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                    <a className="medsos line">
                        <FontAwesomeIcon icon={faLine}/></a>
                    <a className="medsos instagram">
                        <FontAwesomeIcon icon={faInstagram}/></a>
                </div>

                <div className="img-container">
                    <img
                        className="img-fluid"
                        src={`${process.env.PUBLIC_URL}/assets/images/dewaweb-rgb.png`}
                        alt="logo"/>
                </div>
            </div>

            <p>Copyright &#169; 2018-2020 by ReadyLearn <br/>All rights reserved</p>

        </div>
    )
}

export default Footer
