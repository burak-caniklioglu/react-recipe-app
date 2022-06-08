import React from 'react'
import ReactLogo from '../../assets/about.svg'
import {AboutContainer, Image, AboutPerson, AboutInfo} from './style'

function About() {
  return (
    <AboutContainer>
        <Image src={ReactLogo}></Image>
        <AboutPerson>
            <h1>
                About Sofware Developer
                <span>  Burak</span>
            </h1>
        </AboutPerson>
        
        <AboutInfo>
        <h2>Hi, I'am Burak</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS Services.</h4>
        <h2><a href="mailto:burakcaniklioglu@gmail.com">Send email</a> : burakcaniklioglu@gmail.com</h2>
        </AboutInfo>
    </AboutContainer>
  )
}





export default About


