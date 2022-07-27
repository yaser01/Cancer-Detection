import React from 'react'
import Icon1 from '../../image/svg4.svg'
import Icon2 from '../../image/svg5.svg'
import Icon3 from '../../image/svg6.svg'
import {ServicesContiner,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP,Icon} from './ServicesEl'

const Services = () => {
    return (
        <>
        
            
        <ServicesContiner id="services">
            

            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Our current service</ServicesH2>
                    <ServicesP>Tumor self-exam service, free, accurate and fast, in cooperation with specialized doctors</ServicesP>
                </ServicesCard>
                
               
                
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>ٍSoon</ServicesH2>
                    <ServicesP>In the future, we will announce a contract with a group of doctors in order to provide treatment methods for a small fee</ServicesP>
                </ServicesCard>


            </ServicesWrapper>
        </ServicesContiner>
        </>
    )
}

export default Services
