import React from 'react';

import { NavLink } from 'react-router-dom';

import { NavContainer } from '../styles/index'

function NavOne() {
    return(
        <NavContainer>
            <NavLink to="/about" className="top">
                About
            </NavLink>

            <NavLink to="/skills">
                Skills
            </NavLink>

            <NavLink to="/projects">
                Projects
            </NavLink>

            <NavLink to="/contact">
                Contact
            </NavLink>
        </NavContainer>
    )
}
export default NavOne