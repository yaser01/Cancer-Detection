import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop';
import LungCancerDetector from '../components/LungCancerDetector';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNav';
import Sidebar from '../components/SideBar'


const LungTestPage = () => {
    const [isOpen , setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <ScrollToTop />
            <Sidebar  isOpen={isOpen} toggle={toggle}  />
          <SubNavbar toggle={toggle}/>  
          < LungCancerDetector/>  
          <Footer/>
        </div>
    )
}

export default LungTestPage;