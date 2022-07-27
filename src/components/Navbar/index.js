import React ,{useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav , NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink }  from './NavbarEl';
import { useEffect } from 'react';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
const Navbar = ({toggle}) => {
    const [scrollNav , setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80)
        {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect (()=> {
        window.addEventListener('scroll', changeNav)
    },[])


    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
        <IconContext.Provider value={{color : '#002D62'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome} >
                    ZerOne
                </NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="ourtest" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Our Test</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="whyus" smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                            Why Us
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contact" >Contact Us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>



        </>
    )
}

export default Navbar
