import React, {useState} from 'react'
import WhyUs from '../components/WhyUs'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNav';
import Sidebar from '../components/SideBar'

const WhyUsPage = () => {
    const [isOpen , setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen);
  };
    return (
        <div>
            <ScrollToTop />
            <Sidebar  isOpen={isOpen} toggle={toggle}  />
        <SubNavbar toggle={toggle}/>
          <WhyUs />  
          <Footer/>
        </div>
    )
}

export default WhyUsPage;