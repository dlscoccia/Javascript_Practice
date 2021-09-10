import React, {useState, useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import {FaBars, FaShoppingCart} from 'react-icons/fa'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
    if (window.scrollY >= 80) {
        setScrollNav(true)
    } else {
        setScrollNav(false)
    }
}

const toggleHome = () => {
    scroll.scrollToTop()
}

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, []) 
    return (
        <>
        <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavLogo to='/' onClick={toggleHome}>
                Ecoquartz
            </NavLogo>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>NOSOTROS</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>SERVICIOS</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>PRODUCTOS</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>CONTACTO</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='checkout'><FaShoppingCart /></NavBtnLink>
            </NavBtn>
        </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
