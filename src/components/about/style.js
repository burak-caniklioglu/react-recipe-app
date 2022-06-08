import styled from 'styled-components'

const AboutContainer = styled.div`
display: flex;
flex-flow: column wrap;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
min-height: calc(100vh - 80px);
line-height: 2;
margin-bottom: 2rem;
`
const Image = styled.img`
width: 500px;
margin-bottom: 2rem;
`

const AboutPerson = styled.div`
span{
    color: white;
    font-family: Girassol, sans-serif;
    font-size: 3rem;
}
`

const AboutInfo = styled.div`
text-align: right;
    margin: 0px 10px;
    max-width: 1000px;
    border: 1px solid white;
    padding: 25px;
    border-radius: 5px; 

    a{
        color: white;
    }
`
export { AboutContainer, Image, AboutPerson, AboutInfo }