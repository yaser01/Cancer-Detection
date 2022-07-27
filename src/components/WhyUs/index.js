import React from 'react'
import Icon1 from '../../image/svg4.svg'
import Icon2 from '../../image/svg5.svg'
import Icon3 from '../../image/svg6.svg'
import Navbar from '../Navbar'
import SubNavbar from '../SubNav'
import {ServicesContiner,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP,Icon} from './WhyUsEl'

const WhyUs = () => {
    return (
        <>
        <ServicesContiner id="services">
            

            <ServicesH1>Why Choosing Us</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Self Testing</ServicesH2>
                    <ServicesP>We provide a self-testing service in an interactive and user-friendly manner</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Fees</ServicesH2>
                    <ServicesP>We provide all our services free of charge and without any fees or money</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reliability</ServicesH2>
                    <ServicesP>We provide accurate results to a degree from very good to excellent because we have relied on hundreds of thousands of samples</ServicesP>
                </ServicesCard>


            </ServicesWrapper>
        </ServicesContiner>
        </>
    )
}

export default WhyUs
