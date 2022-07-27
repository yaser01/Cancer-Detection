import React , {useState} from 'react';
import Video from '../../video/D1.mp4';
import home_1 from '../../image/home_1.jpg';
import home_2 from '../../image/home_2.jpg';
import home_3 from '../../image/home_3.jpeg';
import home_4 from '../../image/home_4.png';
import {HeroContainer ,HeroBg , VideoBg , HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight,HeroBtnLink, ImgBg} from './HeroEl'
import { Button } from '../ButtonEl';
import { Link } from 'react-scroll';
import SimpleImageSlider from "react-simple-image-slider";
const Hero = () => {
    const [hover , setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const images = [
        { url: home_1 },
        { url: home_2 },
        { url: home_3 },
        {url: home_4},
      ];
    return (
        <HeroContainer id='home' >
            <HeroBg>
            <SimpleImageSlider
        width={1368}
        height={600}
        images={images}
        showBullets={false}
        showNavs={false}
        slideDuration={4}
        autoPlay={true}
      />

            </HeroBg>
            <HeroContent>
                <HeroH1>Cancer Detection</HeroH1>
                <HeroBtnWrapper>
                    <HeroBtnLink  onMouseEnter={onHover} onMouseLeave={onHover} 
                    to="/ourtest"
                    primary='true'
                    dark='true'
                    >
                        Test Youreself {hover ? <ArrowForward /> : <ArrowForward/>}
                    
                    </HeroBtnLink>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero
