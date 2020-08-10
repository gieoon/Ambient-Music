import React from 'react';
import config from '../config.js';

export default function Works(){
    return(
        <div className="SectionWrapper">
            <h3 className="SectionTitle" id="contact">
                Contact
            </h3>
            <div className="SectionContents">
                Email: <a href="mailto:jun.a.kagaya@gmail.com">{config.BAND_CONTACT_EMAIL}</a>
                <br/>
                Phone: +64 {config.BAND_CONTACT_NUMBER}
            </div>
        </div>
    )
}
