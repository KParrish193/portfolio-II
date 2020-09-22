import React from 'react'
import NavOne from './NavOne';
import { ContactContainer, Logo } from '../styles/index'
import { NavLink } from 'react-router-dom';

import github from '../assets/icons/github.png'
import phone from '../assets/icons/call.png'
import mail from '../assets/icons/mail.png'
import linkedin from '../assets/icons/linkedin.png'

function Contact() {
    return(
        <ContactContainer>
            <div className="mobile nav">
                <NavOne />
            </div>

            <div className="content">
            <h1>
                Contact Me
            </h1>
            <h3>I'm currently looking for a new position</h3>
                
            <div>
                <a href="https://github.com/KParrish193" target="blank">
                <Logo src={github} alt="github logo"/>
                github.com/KParrish193
                </a>
            </div>
                
            <div>
                <a href="https://www.linkedin.com/in/parrishkristin/" target="blank">
                <Logo src={linkedin} alt="github logo"/>
                linkedin.com/in/parrishkristin
                </a>
            </div>
                
            <div>
                <p>
                    <Logo src={phone} alt="phone icon"/>
                    +1 208 440 2631
                </p>
            </div>
                
            <div>
                <a href="mailto:k.parrish193@gmail.com">
                <Logo src={mail} alt="mail icon"/>
                K.Parrish193@gmail.com
                </a>
            </div>
            </div>

            <div className="desktop nav">
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
            </div>
        </ContactContainer>
    )
}

export default Contact