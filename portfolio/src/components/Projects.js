import React from 'react'
import { Link } from 'react-router-dom';
import NavOne from './NavOne';
import { ProjectContainer } from '../styles';

function Projects() {
    return(
        <ProjectContainer>
            <div className="mobile">
                <NavOne />
            </div>

            <div className="content">
            <div className="heading">
                <h1>
                    PRO
                </h1>
                <h1 className="opp">
                    JE
                </h1>
                <h1>
                    CTS
                </h1>
            </div>

            <div className="projects">
                <div className="row">
                <Link to="/artxblm">
                <div className="project">
                    <div>
                        <h3 className="number">01</h3>
                    </div>
                    <div>
                        <h3>ART x BLM</h3>
                        <p>
                        App to facilitate a collaborative exchange of art to raise money for anti-racist action</p>
                        <p>
                        • Remotely collaborated with an international team of 3 developers, 1 UX designer, and additional stakeholders
                        </p>
                        <p>
                        • Developed a rich, client-side routed React application with a Node.js SQL database that supports high-resolution image uploads
                        </p>
                    </div>
                </div>
                </Link>

                <Link to="/raheem-ai">                
                    <div className="project">
                    <div>
                        <h3 className="number">02</h3>
                    </div>
                    <div>
                        <h3>RAHEEM</h3>
                        <p>A mobile-forward, independent, online service to help people take action against police violence</p>
                        <p>• Collaborated with a remote, cross-functional team of 5 developers and 2 UX designers from across the United States</p>
                        <p>• Conducted primary user research and information collection working directly with UX and stakeholders</p>
                        <p>
                        • Led majority of stakeholder presentations</p>
                        <p>
                        • Developed lightweight, client-side routed React application with a Firebase NoSQL database</p>
                        <p>
                        • Solely responsible for building interactive charts and data displays</p>
                    </div>
                </div>
                </Link>
                </div>

                <div className="row">
                <Link to="high-q/">
                <div className="project">
                    <div>
                        <h3 className="number">03</h3>
                    </div>
                    <div>
                        <h3>HIGH-Q</h3>
                        <p>A web app that recommends best-matched cannabis strains to users  looking to move away from their dependency on pharmaceuticals</p>
                        <p>• Supervised and assigned daily actionable items to 2 junior devs</p>
                        <p>• Collaborated with a remote, international, cross-functional team of 5 developers and 4 data scientists</p>
                        <p>• Produced a functional application in 1 week</p>
                    </div>
                </div>
                </Link>

                <Link to="/wrdstore">
                <div className="project">
                    <div>
                        <h3 className="number">04</h3>
                    </div>
                    <div>
                        <h3>WASATCH ROLLER DERBY STORE</h3>
                        <p>Nonprofit organization that strives to promote the sport of roller derby in Salt Lake City, Utah, showcasing the dedication and athleticism of all involved
                        </p>
                        <p>
                        • Designed first iteration of web store to provide Wasatch Roller Derby with alternative income and brand promotion streams</p>
                        <p>
                        • Optimized SEO functionality utilizing NextJS, providing 100% improvement into web traffic insight and analysis</p>
                    </div>
                </div>
                </Link>
            </div>
            </div>

            </div>

            <div className="desktop">
                <NavOne />
            </div>

        </ProjectContainer>
    )
}

export default Projects