import React from 'react';
import { SkillsContainer } from '../styles'

import NavOne from './NavOne' 

function Skills() {
    return(
        <SkillsContainer>

        <div className="left">

            <div className="skill">
                <div>
                <h3 className="number">01</h3>
                </div>

                <div>
                <h3> ReactJS • Redux • NodeJS & Express • SQL</h3>
                
                    <p>The Full Stack Web Development curriculum at Lambda School emphasizes utilizing ReactJS and Redux for front end development, with SQL driven backends built with NodeJS and Express. </p>
                    <p>I have built various applications ranging from a plant watering reminder app to an art exchange e-commerce site, utilizing ReactJS, Redux, ContextAPI, and styling libraries such as Styled Components and Material UI.
                    </p>
                </div>
            </div>

            <div className="skill">
                <div>
                <h3 className="number">02</h3>
                </div>
                <div>
                <h3> Python • Algorithms • Data Structures</h3>
                <p> 
                </p>
                </div>
            </div>

            <div className="skill">
                <div>
                <h3 className="number">03
                </h3>
                </div>

                <div>
                <h3>
                    Other Platforms
                </h3>
                <p className="bullet-lead">
                    I have developed skills in various other software and applications including:
                </p>
                    <p className="bullets">
                    • Deploying static sites and builds utilizing Heroku, Netlify, GitHub Pages, and AWS </p>
                    <p className="bullets">
                    • NoSQL Databases - Google Firebase, MongoDB</p>
                    <p className="bullets">
                    • Microsoft Office Suite - Word, Excel, Outlook</p>
                    <p className="bullets">
                    • Google - Cloud Applications, Gmail, and GoogleMeets</p>
                    <p className="bullets">
                    • Adobe Creative Cloud Suite - Photoshop, XD</p>
                    <p className="bullets">
                    • Zoom Video Conferencing</p>
                    <p className="bullets">
                    • Slack
                    </p>
                    </div>
            </div>

            <div className="skill">
                <div>
                <h3 className="number">04</h3>
                </div>
                <div>
                <h3>
                    100% Remote Work
                </h3>
                <p> During my time at Lambda School, I have worked remotely on several teams spread across the United States.
                </p>
                <p>
                I have also had the opportunity to work on two teams that span international borders as well: one a 1-week build with members located across the United States, Sweden and France, and one a larger project with members located in the UK, Germany, and across the United States.
                </p>
                </div>
            </div>

            <div className="skill">
                <div>
                <h3 className="number">05</h3>
                </div>
                <div>
                <h3>
                Strong Sense of Design and UX
                </h3>
                <p>
                I graduated with a Bachelor’s degree in Marketing from Boise State University in 2014. </p>
                <p>One of the most fascinating aspects of marketing to me is why people make the decisions that they make. </p>
                <p>
                This natural curiousity translates into my growing interest in UX and UI design with a deep desire to understand the “why?” behind design decisions. </p>
                </div>
            </div>
        </div>

        <div className="right">
            <div className="heading">
                <h1>SK</h1>
                <h1 className="opp">ILL</h1>
                <h1>S</h1>
            </div>
            
            <div className="nav desktop">
            <NavOne />
            </div>
        </div>

        </SkillsContainer>
    )
}

export default Skills