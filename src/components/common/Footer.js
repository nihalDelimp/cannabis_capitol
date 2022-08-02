import React from 'react'
import {
    Link
} from "react-router-dom";
import footerLogo from '../../assets/footer-logo.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import roku from '../../assets/roku.svg'
import twitch from '../../assets/twitch.png'
function Footer() {
    return (
        <footer className="footer">
            <div className="footer_wraper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footercolWraper">
                                <div className="footColOne">
                                    <div className="footer_logo">
                                        <img src={footerLogo} alt="footerLogo" />
                                    </div>
                                    <div className="footer_desc">
                                        <h3 className="sec_title">ABOUT CANNABIS CAPITOL</h3>
                                        <p>Cannabis Capitol is the community and industry’s leading informational hub. Our
                                            innovative approach to connect every aspect of the industry allows us to create
                                            the platform for voices to be heard and skills to be showcased. Cannabis Capitol
                                            is committed to giving a behind-the-scenes look into the lives of community
                                            leaders, innovators, activists, artists, consumers and companies. We are an all
                                            encompassing platform dedicated to educate, entertain and connect like-minded
                                            individuals. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-3">
                            <div className="footercolWraper">
                                <div className="footColOne">
                                    <ul className="footer_links">
                                        <li className="link_item"><Link to="/">Home</Link></li>
                                        <li className="link_item"><Link to="/entertainment">Entertainment</Link></li>
                                        <li className="link_item"><Link to="/news">Production</Link></li>
                                        <li className="link_item"><Link to="/network">Events</Link></li>
                                        <li className="link_item"><Link to="/news">News</Link></li>
                                        <li className="link_item"><Link to="/network">Network</Link></li>
                                        <li className="link_item"><Link to="/creative">Creative Compound</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footercolWraper">
                                <h3 className="sec_title">social</h3>
                                <div className="footer_social">
                                    <a href="#"><img src={roku} alt="fb" /></a>
                                    <a href="#"><img src={instagram} alt="ig" /></a>
                                    <a href="#"><img src={facebook} alt="fb" /></a>
                                    <a href="#"><img src={youtube} alt="yt" /></a>
                                    <a href="#"><img src={twitch} alt="yt" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
