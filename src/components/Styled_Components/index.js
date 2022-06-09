import styled from 'styled-components';
import {Link} from 'react-router-dom';


// ---------------------------- //
//        Navbar Components       //
// ---------------------------- //


export const Nav = styled.div`

width: 100%;
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
flex-wrap: wrap;
background: rgb(225, 241, 221);
height: 75px;
font-size: 2rem;
`
export const Logo = styled(Link)`
padding: 1rem;
color: rgb(57, 62, 70);
text-decoration: none;
font-weight: 800;
font-size: 2rem;
font-family: Girassol, sans-serif;

    span{
        font-weight: 400;
        font-size: 2rem;
        color: rgb(0, 173, 181);
    }

`
export const Hamburger = styled.div`
display: none;
flex-direction: column;
margin-right: 1rem;
cursor: pointer;
    span{
        height: 4px;
        width: 25px;
        background: rgb(0, 173, 181);
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width:768px){
        display: flex;
        
    }
`

export const Menu = styled.div`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
position: relative;

@media (max-width:768px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "300Px" : "0")};
    transition: max-height 0.3s ease-in 0s;
}
}
`
export const MenuLink = styled(Link)`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: rgb(2, 71, 94);
transition: all 0.3s ease-in 0s;
font-size: 2rem;
font-family: Girassol, sans-serif;
    &:hover {
        color: rgb(0, 173, 181);
    }
    a{
        text-decoration: none;
    color: rgb(2, 71, 94);
    &:hover {
        color: rgb(0, 173, 181);
    }
    }
    @media (max-width:768px){
        background-color: rgb(225, 241, 221);
        border: 1px solid rgb(0, 173, 181);
        border-radius: 10px;
        width: 100%;
    }
`

// ---------------------------- //
//        Page Components       //
// ---------------------------- //


export const Container = styled.div`

background: ${props => props.theme.background};;
background-repeat: no-repeat;
min-height: calc(100vh - 75px);
background-size: cover;
background-position: center center;
display: flex;
-webkit-box-pack: center;
flex-direction: ${props => props.theme.direction};
justify-content: center;
-webkit-box-align: center;
align-items: center;
@media (max-width:1200px){
    background: none;
}
`

export const Section = styled.div`
width: 42vw;
height: 84vh;
background-color: rgba(0, 173, 181, 0.5);
border-radius: 50%;
border: 2px solid rgb(225, 241, 221);
padding: 5px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
@media (max-width:1200px){
    background-color: transparent;
    border: none;
}

`

export const Image = styled.img`
    width: ${props => props.theme.width};
    margin: 1rem;
    @media (max-width:912px){
        width: 80%;
        text-align: center;
    }
`

export const Header = styled.h1`
color: white;
font-family: Girassol, sans-serif;
font-size: 3rem;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
    height: 50px;
    font-size: 2rem;
    width: 250px;
    border-radius: 5px;
    font-family: Girassol, sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    color: white;
    margin: 1rem;
    text-indent: 20px;
`

export const Button = styled.button`
font-size: 2rem;
    font-family: Girassol, sans-serif;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    cursor: pointer;
    margin: 1rem;
`


export const AboutPerson = styled.div`
text-align: center;
font-size: 2vh;
span{
    color: white;
    font-family: Girassol, sans-serif;
    font-size: 6vh;
}
`

export const AboutInfo = styled.div`
    text-align: right;
    margin: 0px 10px;
    width: 30vw;
    border: 1px solid white;
    padding: 25px;
    border-radius: 5px; 
    margin-bottom: 1rem;
    a{
        color: white;
    }

    @media (max-width:768px){
        width: 80%;
        font-size: 2vh;
    }
`