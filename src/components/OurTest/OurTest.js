import React from 'react'
import Icon1 from '../../image/1.svg'
import Icon2 from '../../image/2.svg'
import Icon3 from '../../image/3.svg'
import Navbar from '../Navbar'
import SubNavbar from '../SubNav'
import {ServicesContiner,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP,Icon} from './OurTestEl'

const OurTest = () => {
    return (
        <>
        <ServicesContiner id="services">
            
            
            <ServicesH1>Our Tests </ServicesH1>

            <ServicesWrapper>
                <ServicesCard to="/test/colon">
                    
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Colon Cancer</ServicesH2>
                    <ServicesP>In this test, the Colon images that you upload are compared with the thousand images</ServicesP>
                </ServicesCard>
                
                <ServicesCard to="/test/lung">
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Lung Cancer</ServicesH2>
                    <ServicesP>In this test, the Lung images that you upload are compared with the thousand images</ServicesP>
                </ServicesCard>
                
                <ServicesCard to="/">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Stomach Cancer</ServicesH2>
                    <ServicesP>Coming Soon...</ServicesP>
                </ServicesCard >
                </ServicesWrapper>

        </ServicesContiner>
        </>
    )
}

export default OurTest
