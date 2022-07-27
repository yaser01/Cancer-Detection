import React ,{useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav , NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink }  from './SubNav';
import { useEffect } from 'react';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
const SubNavbar = ({toggle}) => {
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
        <IconContext.Provider value={{color : 'white'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome} >
                    ZerOne
                </NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/ourtest" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Our Test</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/services" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Services</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/whyus" smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                            Why Us
                        </NavBtnLink>
                    </NavBtn>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contact" className="contact" >Contact Us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>



        </>
    )
}

export default SubNavbar
