import React from 'react';
import config from '../config.js';

export default function Piano(){
    return(
        <div className="SectionWrapper">
            <h3 className="SectionTitle" id="testimonials">
                Testimonials
            </h3>
            <div className="SectionContents">
                <div className="quote">
                    <p>Relaxing and therapeutic, {config.BAND_NAME} have managed to manufacture a unique calming experience.</p>
                    <p>Leila, Travel Planner</p>
                </div>
                <div className="quote">
                    <p>Peaceful</p>
                    <p>Rory, Builder</p>
                </div>
                <div className="quote">
                    <p>Makes me forget everything.</p>
                    <p>Jennifer, Masseuse at Goodhands </p>
                </div>
                <div className="quote">
                    <p>We needed personalized music to fill the room but wouldn't dominate it. It didn't take us long to find {config.BAND_NAME} and they talked with us and managed to fit our needs perfectly.</p>
                    <p>Linda, Host at Clearway Nelson</p>
                </div>
            </div>
        </div>
    )
}
