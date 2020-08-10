import React, {useState} from 'react';
import config from '../config.js';

export default function Header(){

    const [activeLink, setActiveLink] = useState(0)

    const checkActiveLink = (index) => {
        return activeLink === index 
            ? "active"
            : "";
    }

    return(
        <div className="Header">
            <div className="header-inner">
                <div id="siteTitleWrapper">
                    <h1>
                        <a href="/">{config.BAND_NAME}</a>
                    </h1>
                </div>

                <div id="headerNav">
                    <nav>
                        <div className="link" style={{float:"left"}}>
                            <a href="#works" className={`${checkActiveLink(0)}`} onClick={()=>{setActiveLink(0)}}>Works</a>
                        </div>
                        <div className="link" style={{float:"left"}}>
                            <a href="#about" className={`${checkActiveLink(1)}`} onClick={()=>{setActiveLink(1)}}>About</a>
                        </div>
                        <div className="link" style={{float:"left"}}>
                            <a href="#venues" className={`${checkActiveLink(2)}`} onClick={()=>{setActiveLink(2)}}>Venues</a>
                        </div>

                        <div className="link" style={{float:"right"}}>
                            <a href="#contact" className={`${checkActiveLink(5)}`} onClick={()=>{setActiveLink(5)}}>Contact</a>
                        </div>
                        <div className="link" style={{float:"right"}}>
                            <a href="#testimonials" className={`${checkActiveLink(3)}`} onClick={()=>{setActiveLink(3)}}>Testimonials</a>
                        </div>
                        {/* <div className="link" style={{float:"right"}}>
                            <a href="#members" className={`${checkActiveLink(4)}`} onClick={()=>{setActiveLink(4)}}>Members</a>
                        </div> */}
                        
                    </nav>
                </div>
            </div>
            
        </div>
    );
}