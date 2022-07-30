import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop';
import ColonCancerDetector from '../components/ColonCancerDetector';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNav';
import Sidebar from '../components/SideBar'


const ColonTestPage = () => {
    const [isOpen , setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <ScrollToTop />
            <Sidebar  isOpen={isOpen} toggle={toggle}  />
          <SubNavbar toggle={toggle}/>  
          < ColonCancerDetector/>  
          <Footer/>
        </div>
    )
}

export default ColonTestPage;