import React from 'react';
import Common from './Common';

function About() {
    return (
        <>
            <Common
                name="Welcome to About page"
                imgsrc="https://www.servicedeskshow.com/wp-content/uploads/2018/07/IT-recruitment-1.jpeg"
                // "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"
                visit="/contact"
                btname="Contact Now"
            />
        </>
    )
}

export default About
