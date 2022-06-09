import React from 'react'
import ReactLogo from '../../assets/about.svg'
import {Container, Image, AboutPerson, AboutInfo} from '../../components/Styled_Components'

function About() {
  return (
    <Container theme={{ background: 'rgba(0, 173, 181, 0.5)', direction:'column' }}>
        <Image src={ReactLogo} theme={{width: '30vw'}}></Image>
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
    </Container>
  )
}





export default About