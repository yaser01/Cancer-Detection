import React, {useState} from 'react'
import Services from '../components/Services'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Icon,NavBtn,NavBtnLink} from '../components/Services/ServicesEl'
import Sidebar from '../components/SideBar'
import ScrollToTop from '../components/ScrollToTop';
import SubNavbar from '../components/SubNav'

const ServicesPage = () => {
  const [isOpen , setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
};
    return (
        <div>
        <ScrollToTop />
        <Sidebar  isOpen={isOpen} toggle={toggle}  />
        <SubNavbar toggle={toggle}/>
        <Services />
          <Footer/>  
        </div>
    )
}

export default ServicesPage;