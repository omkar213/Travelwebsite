import React from "react";
import footerimage from './images/footer-image.png';

function Footersection(){
    return(
        <>
            <div className="footer-section">
                <div className="footerwrapper">
                    <div className="footer-folder-1">
                        <h2 className="footer-title">My Log
                            Travels
                        </h2>
                        <div className="footer-aboutUS-section">
                            <h2>Quick Links</h2>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>My Travel Logs</p>
                        </div>
                        <div className="footer-aboutUS-section">
                            <p>Travels</p>
                            <p>Promo Flights</p>
                            <p>Travel Routes</p>
                        </div>
                        <div className="footer-aboutUS-section">
                            <p>Recommendations</p>
                            <p>Guides</p>
                            <p>Blogs</p>
                        </div>
                        <div className="footer-aboutUS-section">
                            <p>Mission Statement</p>
                            <p>The Team</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div className="footer-folder-2">
                        <div className="footer-image">
                            <img src={footerimage}/>
                        </div>
                        <span>2021 - 2022 My Log Travels. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footersection;