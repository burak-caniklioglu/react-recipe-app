import React,{useState} from 'react'
import { Nav, Logo, Hamburger, Menu, MenuLink } from './style'


function Navbar() {

    const [isOpen,setIsOpen] = useState(false)

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
            <MenuLink to="/login">Logout</MenuLink>
        </Menu>
        
    </Nav>
  )
}


export default Navbar

