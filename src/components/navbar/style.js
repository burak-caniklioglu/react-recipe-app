import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.div`
padding: 0px 2rem;
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
flex-wrap: wrap;
background: rgb(225, 241, 221);
border-radius: 0px 0px 10px 10px;
height: 75px;
font-size: 2rem;
`
const Logo = styled(Link)`
padding: 1rem 0px;
color: rgb(57, 62, 70);
text-decoration: none;
font-weight: 800;
font-size: 2rem;
    i{
        font-family: Girassol, sans-serif;
    }

    span{
        font-family: Girassol, sans-serif;
        font-weight: 400;
        font-size: 2rem;
        color: rgb(0, 173, 181);
    }

`
const Hamburger = styled.div`
display: none;
flex-direction: column;
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

const Menu = styled.div`
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
const MenuLink = styled(Link)`
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

export { Nav, Logo, Hamburger, Menu, MenuLink }