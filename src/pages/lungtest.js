import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import LungCancerDetector from '../components/LungCancerDetector';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNav';

const LungTestPage = () => {
    return (
        <div>
            <ScrollToTop />
            <SubNavbar/>
          < LungCancerDetector/>  
          <Footer/>
        </div>
    )
}

export default LungTestPage;