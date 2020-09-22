import React from 'react'
import { AboutContainer } from '../styles'
import NavOne from './NavOne';

function About() {
    return(
        <AboutContainer>

            <div className="image">
                <div className="nav">
                    <NavOne />
                </div>
            </div>

            <div className="content">
                <div className="heading">
                    <h2>About Me</h2>
                </div>

                <div className="paragraphs">
                    <h4>
                    Current Location:
                    </h4>
                    <h4>
                    Salt Lake City, UTAH
                    </h4>

                    <p>
                    I am a highly design-oriented Fullstack Web Developer (HTML, CSS, JavaScript, React, NodeJS) currently seeking new opportunities in the western United States. I recently completed the Full Stack Web curriculum at Lambda School, and have a Bachelor's degree in Marketing with a Chemistry minor.</p>

                    <p>
                    Emphasizing positive user experiences in front-end web design is where I do my best work. I don't believe an app or website should be considered "done" until all users can have a great experience with it. Other experience includes a demonstrated history of customer service, attention to detail, and teamwork working in the retail industry.</p>
                    </div>

                    <div className="not">
                        <h3>When</h3> 
                        <h3 className="opp" >I'm not </h3>
                        <h3>Coding</h3>
                    </div>
                    
                    <div className="paragraphs">
                    <p>
                    I can be found mountain biking through the Uintas, climbing at the rock wall, on a calm lake paddleboarding with my pitbull, Tallahassee, cuddling my two cats, or hip checking my friends and foes at the Derby Depot in Salt Lake City, Utah.</p>
                    </div>
                </div>

        </AboutContainer>
    )
}

export default About