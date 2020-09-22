import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectNav(){
    return(
        <div>
            <NavLink to="/artxblm" className="top">
                01 Art x BLM
            </NavLink>

            <NavLink to="/raheem-ai">
                02 Raheem AI
            </NavLink>

            <NavLink to="/high-q">
                03 High-Q
            </NavLink>

            <NavLink to="/wrdstore">
                04 Wasatch Roller Derby Store
            </NavLink>
        </div>
    )
}

export default ProjectNav