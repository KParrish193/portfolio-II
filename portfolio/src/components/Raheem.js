import React from 'react'
import ProjectNav from './ProjectNav';

import { RaheemWrdContainer } from '../styles';

import raheem from '../assets/projects/raheem/Raheem.png';
import report from '../assets/projects/raheem/report.png';
import list from '../assets/projects/raheem/list.png';
import display from '../assets/projects/raheem/visual.png';

function Raheem() {
    return(
        <RaheemWrdContainer>
                    <div className="nav">
            <ProjectNav />
            </div>

            <div className="heading">
                <h3 className="number">02</h3>
                <h3>RAHEEM</h3>
            </div>

            <div className="content">
                <div>
                    <a href=""  target="blank">
                        <h5 className="link">Demo</h5>
                            <h6></h6>
                    </a>

                    <a href="https://github.com/KParrish193/blm-art-exchange"  target="blank">
                        <h5 className="link">Github </h5>
                        <h6></h6>
                    </a>

                    <h5 className="tech">Role</h5>
                        <h6> Front End developer </h6>

                    <h5 className="tech">Tech Stack </h5>
                        <h6>HTML | CSS | JavaScript | React | Styled Components | Victory Charts | AWS | Google Firebase | </h6>
                </div>
                <div>
                    <p>
                        During the 8-week Labs experience at Lambda School, I was placed on a team that built a project with an external client, Raheem.
                        We worked hand in hand with Head of Product at Raheem, Nadav Savio, to determine the scope of the project, as well as met regularly to discuss the progress of the project.
                    </p>
                    <p>
                        The vision for our team, comprised of 5 developers and 2 UX designers, was to release two versions of this application: a report that could be filled out after scanning a QR code given to a user by an officer in an interaction, and a dashboard for users to get more information on specific officers. 
                    </p>
                    <p>
                        
                    </p>
                </div>
            </div>

            <div className="row">
                <img src={raheem} />
                    <p>
                    Raheem, coming from the Arabic word for merciful, is an independent service for reporting police conduct in the United States. 
                    </p>
            </div>

            <div className="opprow">
                <img src={report} />
                <p>
                    Our biggest challenge with the 
                </p>
            </div>

            <div className="row">
            <img src={list} />
                <p>
                Documentation along with examples of what you’ve built or code snippets
                </p>
            </div>

            <div className="opprow">
                <img src={display} />
                <p>
                Documentation along with examples of what you’ve built or code snippets
                </p>
            </div>

        </RaheemWrdContainer>
    )
}

export default Raheem