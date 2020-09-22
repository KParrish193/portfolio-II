import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProjectNavContainer} from '../styles'

function ProjectNav(){
    return(
        <ProjectNavContainer>
            <NavLink to="/artxblm" className="top">
                <p>01.</p> Art x BLM
            </NavLink>

            <NavLink to="/raheem-ai">
                <p>02.</p> Raheem AI
            </NavLink>

            <NavLink to="/high-q">
                <p>03.</p> High-Q
            </NavLink>

            <NavLink to="/wrdstore">
                <p>04.</p> Wasatch Roller Derby Store
            </NavLink>
        </ProjectNavContainer>
    )
}

export default ProjectNav