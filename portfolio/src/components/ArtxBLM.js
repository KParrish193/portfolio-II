import React from 'react'
import ProjectNav from './ProjectNav';
import { ArtHighContainer } from '../styles';

import detail from '../assets/projects/artxblm/artistdetail2.png';
import prints from '../assets/projects/artxblm/printlist.png';
import artists from '../assets/projects/artxblm/artistlist.png';

function ArtxBLM() {
    return(
        <ArtHighContainer>
            <div className="nav">
            <ProjectNav />
            </div>

            <div className="heading">
                <h3 className="number">01</h3>
                <h3>ART x BLM</h3>
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
                        <h6> Fullstack developer </h6>

                    <h5 className="tech">Tech Stack </h5>
                        <h6>HTML | CSS | JavaScript | React | Strapi & NodeJS | Heroku | Stripe</h6>
                </div>
                <div>
                    <p>
                    Why did you build this?
                    How do you use this?
                    What is this?
                    Demo & Current Build Status
                    </p>
                </div>
            </div>

            <div className="row">
                <img src={detail} />
                <p>
                Documentation along with examples of what you’ve built or code snippets
                </p>
            </div>

            <div className="opprow">
                <img src={prints} />
                <p>
                Documentation along with examples of what you’ve built or code snippets
                </p>
            </div>

            <div className="row">
            <img src={artists} />
                <p>
                Documentation along with examples of what you’ve built or code snippets
                </p>
            </div>


        </ArtHighContainer>
    )
}

export default ArtxBLM