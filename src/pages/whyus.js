import React from 'react'
import WhyUs from '../components/WhyUs'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNav';

const WhyUsPage = () => {
    return (
        <div>
            <ScrollToTop />
            <SubNavbar/>
          <WhyUs />  
          <Footer/>
        </div>
    )
}

export default WhyUsPage;