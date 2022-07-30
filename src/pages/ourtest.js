import React , {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop';
import OurTest from '../components/OurTest/OurTest';
import Sidebar from '../components/SideBar'

import Footer from '../components/Footer'
import SubNavbar from '../components/SubNav';

const OurTestPage = () => {
    const [isOpen , setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <ScrollToTop />
            <Sidebar  isOpen={isOpen} toggle={toggle}  />
            <SubNavbar toggle={toggle}/>
          < OurTest/>  
          <Footer/>
        </div>
    )
}

export default OurTestPage;