import React from 'react';
import aboutimage from '../images/about.png';

function About()
{
    return(
        <div id='about'>
             <div className='about-image'>
                <img src={aboutimage} alt=''/>
             </div>
             <div className='about-text'>
                <h1>Learn More About Us</h1>
                <p>lorem ipsum..!</p>
                <button><h3>Read More</h3></button>
             </div>
        </div>
    )
}
export default About;