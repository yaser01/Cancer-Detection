import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer'
import Contact from '../components/contact/Contact';
import SubNavbar from '../components/SubNav';
import Sidebar from '../components/SideBar'


const ContactUsPage = () => {
    const [isOpen , setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <ScrollToTop />
            <Sidebar  isOpen={isOpen} toggle={toggle}  />
          <SubNavbar toggle={toggle}/>      
              < Contact/>  
          <Footer/>
        </div>
    )
}

export default ContactUsPage;