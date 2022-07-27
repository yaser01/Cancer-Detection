import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import ColonCancerDetector from '../components/ColonCancerDetector';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNav';

const ColonTestPage = () => {
    return (
        <div>
            <ScrollToTop />
            <SubNavbar/>
          < ColonCancerDetector/>  
          <Footer/>
        </div>
    )
}

export default ColonTestPage;