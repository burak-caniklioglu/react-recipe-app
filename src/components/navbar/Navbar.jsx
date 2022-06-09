import React,{useState} from 'react'
import { useApp } from '../../contexts/provider'
import { Nav, Logo, Hamburger, Menu, MenuLink } from '../Styled_Components'
import { useNavigate } from 'react-router-dom'


function Navbar() {
    const navigate = useNavigate()
    const [isOpen,setIsOpen] = useState(false)
    const {setIsAuth} = useApp()

  return (
    <Nav>
        <Logo to="/">
            <i>&#60;Burak&#62;</i>
            <span>recipe</span>
        </Logo>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </Hamburger>

        <Menu isOpen = {isOpen}>
            <MenuLink to="/about" >About</MenuLink>
            <MenuLink to="/github" target="_blank"><a href="https://github.com/burak-caniklioglu" >Github</a></MenuLink>
            <MenuLink to="/login"><span onClick={() => {setIsAuth(false);
            }}>Logout</span></MenuLink>
        </Menu>
        
    </Nav>
  )
}


export default Navbar

