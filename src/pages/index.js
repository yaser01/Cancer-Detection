import React , {useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfoSec from '../components/InfoSec'
import { homeOjOne,homeOjTwo,homeOjThree,homeOjFour } from '../components/InfoSec/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import SubNavbar from '../components/SubNav'
const Home = () => {
    const [isOpen , setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
          <Sidebar  isOpen={isOpen} toggle={toggle}  />
          <SubNavbar toggle={toggle}/>
          <Hero/>
          
          
          <Footer/>
          
        </>
    )
}

export default Home
