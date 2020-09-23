import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProjectNavContainer} from '../styles'
import back from '../assets/icons/backarrow.png';

function ProjectNav(){
    return(
        <ProjectNavContainer>
            <NavLink to="/projects" className="top">
                &#8592; Projects
            </NavLink>

            <NavLink to="/artxblm">
                <p>01.</p> ArtxBLM
            </NavLink>

            <NavLink to="/raheem-ai">
                <p>02.</p> Raheem
            </NavLink>

            <NavLink to="/high-q">
                <p>03.</p> High-Q
            </NavLink>

            <NavLink to="/wrdstore">
                <p>04.</p> Wasatch Roller Derby
            </NavLink>
        </ProjectNavContainer>
    )
}

export default ProjectNav