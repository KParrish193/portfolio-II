import React from 'react'
import { AboutContainer } from '../styles'
import NavOne from './NavOne';
import about from '../assets/NZ6_7498.jpg';
import me from '../assets/NZ6_7512.jpg';

function About() {
    return(
        <AboutContainer>

            <div className="image">
                <div className="nav">
                    <NavOne />
                </div>
            </div>


            <div className="content">
                <div className="mobilenav">
                    <NavOne />
                </div>

                <span className="heading">
                    <h2>About Me</h2>
                </span>

                <div className="paragraphs-container">
                <div className="paragraphs">
                    <h4>Location -</h4>
                    <h4 className="color">
                    Salt Lake City,
                    </h4>
                    <h4 className="color">
                    Utah
                    </h4>

                    <div className="mobile">
                        <img src={me}></img>
                    </div>
                    <p className="name">Kristin "Kp" Parrish (she/they)</p>
                    <p>
                    I'm fueled by crispy chicken sandwiches, Monster Energy drinks, and Dutch Bros. Coffee. I'm inspired by hustling artists, emo pop-punk music, the great outdoors, and underdog sports teams. I'm motivated by discovering the "why?" behind everything - why things work, and most especially, why people do the things that they do. 
                    </p>

                    <p>
                    I am a highly design-oriented Fullstack Web Developer (HTML, CSS, JavaScript, React, NodeJS) currently seeking new opportunities in the western United States. I recently completed the Full Stack Web curriculum at Lambda School in August of 2020, and graduated from Boise State University with a Bachelor's degree in Marketing and Chemistry minor in 2014.</p>

                    <p>
                    Emphasizing positive user experiences in front-end web design is where I do my best work. I strive to make every interaction with my work give people warm fuzzy feelings like a small kitten's purr. My other work experience includes a demonstrated history of customer service, attention to detail, and teamwork working within the retail industry.</p>
                    </div>

                    <div className="not">
                            <h3>When</h3> 
                            <h3 className="opp">I'm </h3>
                            <h3 className="opp">not </h3>
                            <h3>Coding,</h3>

                            <img src={about} />
                    </div>
                    
                    <div className="paragraphs">
                    <p className="top">
                    I stay busy by chasing Sasquatch through the Uintas on my mountain bike, climbing at the rock wall, cheering like a crazed lunatic for the Utah Jazz, throwing discs at baskets on the local disc golf course, paddleboarding on a calm lake with my rescue pittie, Tallahassee, cuddling my three cats while watching Netflix, or strapping on my quad skates to rep my team, Wasatch Roller Derby.
                    </p>
                    </div>
                    </div>
                </div>

        </AboutContainer>
    )
}

export default About