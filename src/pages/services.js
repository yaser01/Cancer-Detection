import React from 'react'
import Services from '../components/Services'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Icon,NavBtn,NavBtnLink} from '../components/Services/ServicesEl'

import ScrollToTop from '../components/ScrollToTop';
import SubNavbar from '../components/SubNav'

const ServicesPage = () => {
    return (
        <div>
        <ScrollToTop />
        <SubNavbar/>
        <Services />
          <Footer/>  
        </div>
    )
}

export default ServicesPage;