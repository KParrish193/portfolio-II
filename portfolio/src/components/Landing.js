import React from 'react'

import { LandingContainer, NavContainer } from '../styles'

function Landing() {
    return(
        <LandingContainer>
            <div className="header">
                <h1>KP </h1>
                <h3>Web Developer </h3>
                <h1>PARRISH</h1>
            </div>
            <div className="scroll">
                <NavContainer>
                    <p>Scroll for more ...</p>
                </NavContainer>
            </div>
        </LandingContainer>
    )
}

export default Landing