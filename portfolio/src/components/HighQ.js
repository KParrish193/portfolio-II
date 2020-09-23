import React from 'react'
import ProjectNav from './ProjectNav';
import { ArtHighContainer } from '../styles';

import detail from '../assets/projects/artxblm/artistdetail2.png';
import prints from '../assets/projects/artxblm/printlist.png';
import artists from '../assets/projects/artxblm/artistlist.png';

function HighQ() {
    return(
        <ArtHighContainer>
            <div className="nav">
            <ProjectNav />
            </div>

            <div className="heading">
                <h3 className="number">03</h3>
                <h3>HIGH-Q</h3>
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
                    
                    <a href=" https://www.mikioharman.com/2020-02-07-budAPI/"  target="blank">
                        <h5 className="tech">Project Blog </h5>
                        <h6>by Data Scientist Mikio Harman</h6>
                    </a>


                    <h5 className="tech">Role</h5>
                        <h6> React II developer </h6>

                    <h5 className="tech">Tech Stack </h5>
                        <h6>HTML | CSS | JavaScript | React | ContextAPI | ExpressJS | NodeJS | Netlify | Flask | Python </h6>
                </div>
                <div>
                    <p>
                        This project was my favorite 1 week build project at Lambda School. Initially named MedCabinet, I revisted the project and worked on a marketing rebrand with Data Scientist Mikio Harman. We came up with the name High-Q.
                    </p>

                    <p>
                        The concept of the project is to generate best-matched recommendendations of cannabis strains for users who are looking to replace their dependency on traditional pharmaceutical medications.
                    </p>

                    <p>
                        In a single week, our team of developers and data scientists located across the United States and parts of Europe created a presentation ready app that utilized natural language processing and a dataset composed of over 2,500 different strains, descriptions, ailments, types, flavors, and effects.
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

export default HighQ