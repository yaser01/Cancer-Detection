import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {Link as LinkR } from 'react-router-dom'




export const ServicesContiner = styled.div`
 //padding: 24 24px;
 position:realtive;
 margin-top: 15px;
 margin-bottom: 0px;
 height : 512px;
 text-align:center;   
 justify-content: center;
 align-items: center;
 background : #fff;
 color: #000;
 @media screen and (max-width : 768px)
 {
     height:1100px;
 }

 @media screen and (max-width : 480px)
 {
     height:1200px;
 }


`

export const ServicesWrapper= styled.div`
 max-width: 1000px;
 margin: 20px auto ;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr ;
 grid-gap: 16px;
 padding : 20 50px;
 
 @media screen and (max-width : 1000px)
 {
    grid-template-columns: 1fr 1fr ;
 }

@media screen and (max-width : 768px)
 {
    grid-template-columns: 1fr ;
    padding : 0 20px;
 }

`

export const ServicesCard = styled(LinkR)`
 background:#fff;
 display: flex;
 flex-direction:column;
 justify-content: flex-start;
 align-items:center;
 border-radius:10px;
 max-height: 310px;
 padding:20px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;


 &:hover {
     transform : scale(1.04);
     transition: all 0.2s ease-in-out;
     cursor:pointer;
 }

`


export  const  ServicesIcon = styled.img`
 height: 160px;
 width:160px;
 margin-bottom:10px;


`

export const ServicesH1 = styled.h1`
 font-size:2.5rem;
 color:#000;

 @media screen and (max-width : 480px)
 {
     font-size: 2rem;
 }

`

export const ServicesH2 = styled.h2`
 font-size:1rem;
 margin-bottom:10px;

 `

 export const ServicesP = styled.p`
 font-size:1rem;
 text-align:center;

 `
 
export const Icon = styled(Link)`
margin-left:32px;
margin-top:32px;
text-decoration : none;
color:#fd1225;
font-weight:700;
font-size:32px;

@media screen and (max-width : 480px)
{ 
    margin-left:32px;
    margin-top:32px;
}


`;

