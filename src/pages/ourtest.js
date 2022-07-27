import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import OurTest from '../components/OurTest/OurTest';
import Footer from '../components/Footer'
import SubNavbar from '../components/SubNav';

const OurTestPage = () => {
    return (
        <div>
            <ScrollToTop />
            <SubNavbar/>
          < OurTest/>  
          <Footer/>
        </div>
    )
}

export default OurTestPage;