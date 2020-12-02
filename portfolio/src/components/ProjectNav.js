import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProjectNavContainer} from '../styles'

function ProjectNav(){
    return(
        <ProjectNavContainer>
            <NavLink to="/projects" className="top">
                &#8592; Projects
            </NavLink>

            <NavLink 
                to="/artxblm"
                activeStyle={{
                    color: '#fff',
                    fontWeight: '900', 
                }}>
                01.  ArtxBLM
            </NavLink>

            <NavLink 
                to="/raheem-ai" 
                activeStyle={{
                    color: '#171c21'
                }}>
                02. Raheem
            </NavLink>

            <NavLink 
                to="/high-q"                 
                activeStyle={{
                    color: '#fff', 
                    fontWeight: '900'
                }}>
                03. High-Q
            </NavLink>

            <NavLink 
                to="/wrdstore"
                activeStyle={{
                    color: '#171c21', 
                    fontWeight: '900'
                }}>
                04. Wasatch Roller Derby
            </NavLink>
        </ProjectNavContainer>
    )
}

export default ProjectNav