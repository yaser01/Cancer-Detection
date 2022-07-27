import React from 'react'
import {Button} from '../ButtonEl'
import {InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine ,Heading,Subtitle,BtnWrap,ImgWrap,Img,InfoBtnLink}  from './InfoEl'
import WhyUsPage from '../WhyUs/index' 
import img2 from '../../image/2.jpg'

const InfoSec = ({lightBg,id,buttontag,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id} >
           <InfoWrapper>
              <InfoRow imgStart={imgStart} > 
               <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText} >{headline}</Heading>
                    <Subtitle darkText={darkText} >{description}</Subtitle>
                    <BtnWrap>
                    <InfoBtnLink to={buttontag} 
                    
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1: 0}
                    dark2={dark2 ? 1 : 0 }
                    
                    
                    
                    >{buttonLabel}</InfoBtnLink>
                    
                    </BtnWrap>    
                    
                </TextWrapper>
               </Column1>
               <Column2>
               <ImgWrap>
                <Img src={img} alt={alt}  />
               </ImgWrap>
               </Column2>
               </InfoRow>
               </InfoWrapper>    
          </InfoContainer> 
        </>
    )
}

export default InfoSec
