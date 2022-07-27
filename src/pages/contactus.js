import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer'
import Contact from '../components/contact/Contact';
import SubNavbar from '../components/SubNav';

const ContactUsPage = () => {
    return (
        <div>
            <ScrollToTop />
            <SubNavbar/>
          < Contact/>  
          <Footer/>
        </div>
    )
}

export default ContactUsPage;