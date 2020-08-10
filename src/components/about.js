import React from 'react';

export default function About(){
    return(
        <div className="SectionWrapper">
            <h3 className="SectionTitle" id="about">
                About
            </h3>
            <div className="SectionContents">
                We are a music group based in Nelson, New Zealand specializing in improvisational peaceful and ambient music. 
                <br/>
                <br/>
                We perform on piano, with accompaniment by flute, clarinet, trumpet or vocals.
                <br/>
                <br/>
                Our music helps to facilitate conversation and can be played at dinner parties or gatherings. We are best suited to casual relaxing atmospheres.
                {/* for meditation sessions to engage the mind */}
            </div>
        </div>
    )
}
