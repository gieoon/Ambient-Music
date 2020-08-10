import React, {useState, useRef} from 'react';
import config from '../config.js';

export default function FloatingHeader(){

    const [activeLink, setActiveLink] = useState(0)

    const floatingHeaderRef = useRef();

    const checkActiveLink = (index) => {
        return activeLink === index 
            ? "active"
            : "";
    }

    window.onscroll = function() {
        windowScroll();
        checkHighlightLink();
      };
      
    function windowScroll() {
        floatingHeaderRef.current.classList.toggle("active", document.documentElement.scrollTop > 125);
    }

    // Highlight a link based on scroll position
    // Returns index to be highlighted
    function checkHighlightLink(){
        const targets = ["works","about","venues","testimonials","contact"];
        for(var i=0;i<targets.length;i++){
            var el = document.getElementById(targets[i]);
            if((el.offsetTop + el.offsetHeight > window.scrollY)){
                setActiveLink(i);
                console.log('set active link, ', i)
                return;
            }
        }
        // setActiveLink(targets.length-1);
    }

    return(
        <div className="FloatingHeader" ref={floatingHeaderRef}>
            <div className="header-inner">

                <div id="headerNav">
                    <nav>
                        <div className="link">
                            <a href="#works" className={`${checkActiveLink(0)}`} onClick={()=>{setActiveLink(0)}}>Works</a>
                        </div>
                        <div className="link">
                            <a href="#about" className={`${checkActiveLink(1)}`} onClick={()=>{setActiveLink(1)}}>About</a>
                        </div>
                        <div className="link">
                            <a href="#venues" className={`${checkActiveLink(2)}`} onClick={()=>{setActiveLink(2)}}>Venues</a>
                        </div>
                        <div className="link">
                            <a href="#testimonials" className={`${checkActiveLink(3)}`} onClick={()=>{setActiveLink(3)}}>Testimonials</a>
                        </div>
                        <div className="link">
                            <a href="#contact" className={`${checkActiveLink(4)}`} onClick={()=>{setActiveLink(4)}}>Contact</a>
                        </div>
                    </nav>
                </div>
            </div>
            
        </div>
    );
}