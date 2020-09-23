import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import about from '../assets/NZ6_7498.jpg';
import landing from '../assets/lakecopy.jpg';
import contact from '../assets/herocopy.jpg';

export const bounceAnimation = keyframes`${bounce}`;

export const FadeDiv = styled.div`
    background-color: #000;
    color: #fff;
    width: 90%;
    // animation: 1s ${bounceAnimation};
`;

export const AppContainer = styled.div`
    height: 100vh;
    background-color: #fff;
    padding: 3rem;
`

export const LandingContainer = styled.div`
    background-image: url(${landing});    
    width: 100%;
    height: 100vh;
    background-color: grey;
    padding-top: 35rem;
    background-repeat: no-repeat;
    background-position: 50% 15%;
    background-size: cover;

    @media(max-width: 1050px){
        padding-top: 35rem;
        background-position: 41% 0%;
    }

    @media(max-width: 700px){
        padding-top: 25rem;
        background-position: 45% 0%;
    }

    .header {
        padding-left: 4.8rem;
        background-color: #D0B4A4;
        width: 59%;
        min-width: 750px;
        height: 13rem;

        @media(max-width: 1050px){
            padding-left: 2.5rem;
            height: 10rem;
            width: 63%;
            min-width: 650px;
        }

        @media(max-width: 700px){
            padding-left: 1rem;
            height: 7.5rem;
            width: 78%;
            min-width: 415px;
        }

        @media(max-width: 415px){
            padding-left: 0.5rem;
            min-width: 325px;
            height: 6.5rem;
        }

        .scroll {
            border: solid orange 1px;
            display: flex;
        }

        h1 {
            font-size: 11rem;
            font-family: 'Kollektif';
            font-weight: bold;
            margin: 0;
            padding: 0;
            line-height: 0.0001;
            letter-spacing: 0.3rem;
            color: #282F36;

            @media(max-width: 1050px){
                font-size: 9.2rem;
            }

            @media(max-width: 700px){
                font-size: 6.2rem;
                letter-spacing: 0.1rem;
            }

            @media(max-width: 415px){
                font-size: 5rem;
                letter-spacing: 0.05rem;
            }
        }
    
        h3 {
            font-family: 'Montserrat', sans-serif;
            font-size: 2.6rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.65rem;
            height: 8rem;
            text-align: center;
            width: 100%;
            color: #fff;
            margin: 0;
            padding: 2rem 0rem 1rem 5.5rem;

            @media(max-width: 1050px){
                height: 6.5rem;
                padding-left: 4.5rem;
                font-size: 2.2rem;
                letter-spacing: 0.7rem;
            }

            @media(max-width: 700px){
                padding-top: 2rem;
                padding-left: 3.7rem;
                height: 4.5rem;
                font-size: 1.6rem;
                letter-spacing: 0.3rem;
            }

            @media(max-width: 415px){
                font-size: 1.2rem;
                padding-left: 2rem;
                height: 3.7rem;
            }
        }
    }
`

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
    height: auto;
    flex-direction: row;

    .heading {
        display: inline block;
        width: 50rem;

        @media(max-width: 700px){
            width: 90%;
        }
        
        h2 {
            font-family: 'kollektif';
            font-size: 5rem;
            text-transform: uppercase;
            padding: 0;
            margin: 0;

            @media(max-width: 700px){
                font-size: 3.2rem;
            }
        }
    }

    .mobilenav {
        display: none;

        @media(max-width: 700px){
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    .mobile {
            display: none;
    
            @media(max-width: 700px){
                width: 100%;
                display: flex;
                justify-content: center;
    
                img {
                    margin: 1rem 0 0; 
                    width: 100%;
                    height: 20rem;
                    object-fit: cover;
                    position: center;
                }
            }
        }
    


    .paragraphs {
        width: 90%;
    }
    
    .image {
        background-image: url(${about});
        background-repeat: no-repeat;
        background-position: 50% 10%;
        background-size: cover;
        width: 66%;
        height: auto;

        @media(max-width: 700px){
            display: none;
        }

        .nav {
            padding-top: 2rem;
            
            @media(max-width: 700px){
                padding-top: 0;
            }

            a {
                color: #282F36;
                writing-mode: vertical-rl;
                border-bottom: solid 1px #282F36;

                @media(max-width: 700px){
                    border-bottom: none;
                }
            }
        }
    }

    .content {
        background-color: #fff;
        color: #282F36;
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;

        @media(max-width: 700px){
            width: 100%;
            padding: 0 0 3rem 0;
        }

        h4 {
            color: #D0B4A4;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.9rem;
            text-transform: uppercase;
            letter-spacing: 0.15rem;
            padding: 0;
            margin: 0;


            @media(max-width: 1050px){
                font-size: 1.5rem;
                padding-bottom: 0.5rem; 
            }

            @media(max-width: 700px){
                font-size: 1.3rem;
                padding: 0;
            }
        }

        .opp {
            background-color: #D0B4A4;
            width: 40%;
    
            @media(max-width: 1050px){
                width: 55%;
            }
    
            @media(max-width: 700px){
                width: 45%;
            }
        }

        .not {
            width: 100%;
            padding: 1rem 0 0;

            img {
                display: none;
            }

            @media(max-width: 700px){
                width: 100%;

                img {
                    display: block;
                    width: 90%;
                    margin: 0 auto;
                    padding-top: 1rem;
                }
            }
        }

        .top {
            padding-top: 0.5rem;

            @media(max-width: 700px){
                padding-top: 1rem;
            }
        }

        h3 {
            text-transform: uppercase;
            font-family: 'kollektif';
            font-size: 3rem;
            color: #282F36;
            margin: 0;
            padding: 0 1.5rem;

            @media(max-width: 1050px){
                padding: 0 0.75rem;
            }

            @media(max-width: 700px){
                padding: 0 1.25rem 0;
            }
        }

        p {
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 0.13rem;
            padding: 1.5rem 3rem 0 0;
            width: 100%;

            @media(max-width: 1050px){
                padding: 1rem 2.5rem 0 0;
            }

            @media(max-width: 700px){
                padding: 1rem 0 0 0;
            }
        }
    }
`

export const ContactContainer = styled.div`
    background-image: url(${contact});
    width: 100%;
    height: 100vh;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    justify-content: space-between;
    display: flex;
    flex-direction: row;

    @media(max-width: 700px){
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    h1 {
        color: #fff;
        font-size: 4.8rem;
        text-transform: uppercase;
        font-family: 'kollektif';
        font-style: italic;
        letter-spacing: 0.5rem;
        padding: 4rem 5rem 2.5rem;
        margin: 0;
        width: 100%;

        @media (max-width: 1050px){
            font-size: 3.6rem;
            padding: 2rem 2rem 1.5rem
        }

        @media (max-width: 700px){
            font-size: 2.9rem;
            letter-spacing: 0.25rem;
            padding: 1rem 0rem 0.7rem
        }
    }

    h3 {
        margin: 0 5rem 2.5rem;
        color: #C3C6D7;
        text-transform: uppercase;
        font-size: 2.0rem;
        font-weight: 500;
        letter-spacing: 0.5rem;

        @media (max-width: 1050px){
            font-size: 1.5rem;
            letter-spacing: .3rem;
            margin: 0 2rem 1.5rem
        }

        @media (max-width: 500px){
            font-size: 1.3rem;
            letter-spacing: .15rem;
            margin: 0 1rem 1rem;
            width: 90%;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }

    .nav {
        display: flex;
        width: 10%;

        @media(max-width: 700px){
            width: 100%;
        }

        div {
            width: 100%;
        }

        a {
            font-size: 1rem;
            padding: 0;
            margin: 0;
            border-bottom: none;

            @media(max-width: 700px){
                font-size: 0.6rem;
            }
        }
    }

    .mobile {
        display: none;

        @media(max-width: 700px){
            display: flex;
        }
    }

    .desktop {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        width: 5%;
        height: auto;
        margin: 0;
        padding: 0;

        a {
            writing-mode: vertical-rl;
            text-transform: uppercase;
            padding: 2rem 1rem;
        }

        @media(max-width: 700px){
            display: none;
        }
    }

    div {
        width: 70%;
        display: flex;
        flex-direction: row;
        padding: 0.7rem 0;
        margin: 0 5rem;

        @media (max-width: 1050px){
            margin: 0rem 2rem;
            padding: 0.4rem 0;
        }

        @media (max-width: 500px){
            margin: 0rem 1rem;
            padding: 0.2rem 0;
            width: 90%;
        }

        p, a {
            text-decoration: none;
            color: #fff;
            font-size: 1.3rem;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 0.05rem;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            align-items: center;

            @media (max-width: 500px){
                font-size: 1rem;
            }
        }
    }
`

export const Logo = styled.img`
    margin-right: 1rem;
    height: 2rem;

    @media(max-width: 500px){
        margin-right: 1rem;
        height: 1.5rem;
    }
`

export const NavContainer = styled.div`
    width: 3rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 2rem;

    @media(max-width: 1050px){
        padding-right: 1rem;
    }

    @media(max-width: 700px){
        width: 83%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    .top {
        padding: 1rem;

        @media(max-width: 700px){
            padding: 0.5rem 0.5rem 0.5rem 1rem;
        }
    }

    p {
        writing-mode: vertical-rl;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: .3rem;
        padding: 3rem 1rem 1rem; 
    }

    a {
        writing-mode: vertical-rl;
        color: #D0B4A4;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-family: 'Montserrat', sans-serif;
        border-bottom: solid 1px #D0B4A4;
        padding: 3rem .75rem .75rem; 
        letter-spacing: .3rem;

        @media(max-width: 700px){
            writing-mode: horizontal-tb;
            border-bottom: none;
            padding: 0.5rem;
            font-size: 0.7rem;
            letter-spacing: 0.15rem;
        }
    }
`

export const ProjectNavContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.5rem 0;

    p {
        margin: 0;
        padding: 0 .75rem 0 0;

        @media(max-width: 700px ){
            padding: 0 .25rem 0 0;
        }
    }

    a {
        text-decoration: none;
        color: #282F36;
        font-size: 0.9rem;
        letters-spacing: 0.1rem;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        margin: 0;

        @media(max-width: 700px){
            font-size: 0.5rem;
        }
    }
`

export const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    color: #282F36;
    padding-top: 4rem; 

    @media(max-width: 1050px){
        padding-top: 1.5rem;
    }

    @media(max-width: 700px){
        flex-direction: column;
        justify-content: center;
        padding: 0;
    }

    .opp {
        background-color: #D0B4A4;
        width: 40%;

        @media(max-width: 1050px){
            width: 55%;
        }

        @media(max-width: 700px){
            width: 50%;
        }
    }

    h1 {
        color: ;
        font-size: 10rem;
        font-family: 'kollektif';
        padding: 0 0 0 5rem;
        margin: 0;

        @media(max-width: 1050px){
            font-size: 8.7rem;
            padding: 0 0 0 3rem;
        }

        @media(max-width: 700px){
            font-size: 4.5rem;
            padding: 0 0.75rem 0 0.75rem;
        }
    }

    .desktop {
        display: flex;
        padding-top: 0.75rem;

        @media(max-width: 700px){
            display: none;
        }
    }

    .mobile {
        display: none;

        @media(max-width: 700px){
            display: flex;
            justify-content: flex-end;
        }
    }

    .content {
        width: 95%;

        @media(max-width: 700px){
            width: 100%;
        }
    }

    .projects {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0.5rem 3rem;

        @media(max-width: 1050px){
            padding: 1.5rem 2.5rem 2.5rem;
        }

        @media(max-width: 700px){
            padding: 1rem 0.5rem 2.5rem;
        }

        .row {
            width: 85%;
            display: flex;
            flex-direction: row;

            @media(max-width: 1050px){
                width: 95%;
            }

            @media(max-width: 700px){
                flex-wrap: wrap;
            }

            a {
                width: 100%;
                text-decoration: none;
                color: #282F36;
            }
        }
    }

    .project {
        display: flex;
        flex-direction: row;
        width: 85%;
        padding: 1rem 0;

        @media(max-width: 700px){
            width: 90%;
        }

        .number {
            padding-right: 2rem;
        }

        div {
            display: flex;
            flex-direction: column;
        }

        h3 {

            font-family: 'kollektif';
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 0.5rem;
    
            @media(max-width: 1050px){
                font-size: 1.3rem;
                letter-spacing: 0.4rem;
            }
    
            @media(max-width: 700px){
                font-size: 1rem;
                letter-spacing: 0.2rem;
            }
        }

        p {
            width: 100%;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 0.13rem;
            padding: 0.5rem 3rem 0 0;

            @media(max-width: 1050px){
                padding: 0.5rem 2.5rem 0 0;
            }
        }
    }
`

export const RaheemContainer = styled.div`
    width: 100%;

    h2 {
        text-transform: uppercase;
        font-family: 'kollektif'
    }

    .left {

    }

    .right {

    }

    .split {

    }
`

export const SkillsContainer = styled.div`
    background-color: #000;
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-position: 0% 40%;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    padding: 3rem 0;

    @media(max-width: 1050px){
        padding: 2.5rem 0;
        background-position: top left;
        background-size: cover;
    }

    @media(max-width: 700px){
        padding: 1rem 0;
        background-position: center left;
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .opp {
        background-color: #D0B4A4;

        text-align: right;

        @media(max-width: 1050px){
            width: 65%;
        }

        @media(max-width: 700px){
            width: 85%;
        }
    }

    .mobile {
        display: none;

        @media(max-width: 700px){
            width: 100%;
            display: flex;
        }
    }

    .skill {
        display: flex;
        padding: 0 0.35rem 1rem 0;

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .bullet-lead {
            padding: 0.5rem 0rem 0rem 0rem;
            
            @media(max-width: 1050px){
                padding: 0.5rem 0rem 0rem 0rem;
            }

            @media(max-width: 700px){
                padding: 0.1rem 0rem 0rem 0rem;
            }
        }

        .bullets {
            padding-left: 2rem;

            @media(max-width: 1050px){
                padding-left: 1.5rem;
            }
    
            @media(max-width: 700px){
                padding-left: 0.75rem;
            }
        }

        .number {
            width: 10%;
            padding-right: 3rem;

            @media(max-width: 1050px){
                padding-right: 2rem;
            }
    
            @media(max-width: 700px){
                padding-right: 0.75rem;
            }
        }
    }

    h1 {
        text-align: right;
        color: #fff;
        font-size: 10rem;
        font-family: 'kollektif';
        padding: 0 3.5rem 0 10rem;
        margin: 0;

        @media(max-width: 1050px){
            font-size: 8.7rem;
            padding: 0 2.5rem 0 5rem;
        }

        @media(max-width: 700px){
            font-size: 4.5rem;
            padding: 0 0.75rem 0 0.75rem;
        }
    }

    h3 {
        text-transform: uppercase;
        color: #fff;
        font-family: 'kollektif';
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.5rem;

        @media(max-width: 1050px){
            font-size: 1.3rem;
            letter-spacing: 0.4rem;
        }

        @media(max-width: 700px){
            font-size: 1rem;
            letter-spacing: 0.2rem;
        }
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 1.2rem;
        color: #fff;
        width: 75%;
        padding: 0.1rem 0rem .3rem 0rem;
        margin: 0;
        letter-spacing: 0.15rem;

        @media(max-width: 1050px){
            font-size: 1rem;
            padding: 0.1rem 0rem 0.2rem 0rem;
            width: 90%;
        }

        @media(max-width: 700px){
            font-size: 0.9rem;
            padding: 0.1rem 0rem .1rem 0rem;
            width: 100%;
        }
    }

    .right {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        @media(max-width: 700px){
            justify-content: flex-start;
        }

        .heading {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 100%;
        }

        .desktop {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;
            height: 100%;
            padding: 0 1rem 0 0;
        
            @media (max-width: 700px){
                width: 30%;
                display: none;
            }
        }
    }

    .left{
        width: 45%;
        padding-left: 3.5rem;

        @media (max-width: 1050px){
            width: 55%;
            padding-left: 2.5rem;
        }

        @media (max-width: 700px){
            width: 63%;
            padding-left: 1rem;
        }
`

