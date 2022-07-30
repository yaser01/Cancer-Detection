import React from 'react'
import {SidebarContainer,Icon ,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWarp,SidebarRoute} from './SideBarEl';
import { useEffect } from 'react';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
const Sidebar = ({isOpen , toggle} ) => {
    return (
        
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink to="/ourtest"  onClick={toggle}>
                    Our Tests
                </SidebarLink>
                <SidebarLink to="/services" onClick={toggle}>
                  Services
                </SidebarLink>
                <SidebarLink to="/whyus" onClick={toggle}>
                    Why Us
                </SidebarLink>
                <SidebarLink to="/contact" onClick={toggle}>
                    Contact Us
                </SidebarLink>
              </SidebarMenu> 

            </SidebarWrapper>
        </SidebarContainer>
        
    )
}

export default Sidebar
