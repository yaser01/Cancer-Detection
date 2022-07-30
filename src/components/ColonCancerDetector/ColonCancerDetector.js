import styled from "styled-components";




export const InfoContainer = styled.div`
  color:#fff;
  background: #fff;


  @media screen and (max-width: 768px){
      padding:100px 0;

  }
  @media screen and (max-width : 768px)
  {
      height:1100px;
  }
 
  @media screen and (max-width : 480px)
  {
      height:1200px;
  }
`


export const InfoWrapper = styled.div`
 display:grid;
 z-index:1;
 margin-top:30px;
 width:100%;
 max-width:1100px;
 margin-right: auto;
 margin-left:auto;
 padding:0 24px;
 justify-content: center;

`


export const InfoRow = styled.div`
 display:grid;
 grid-auto-columns: minmax(auto,1fr);
 align-items:center;
 grid-template-areas : ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
 
 @media screen and (max-width : 1000px){
     grid-template-areas:${({imgStart}) => (imgStart ? `'col2' 'col2'` : `'col1 col1' 'col2 col2'`)};
 }

`


export const Column1 = styled.div`
 margin-bottom:15px;

 grid-area:col1;
 @media screen and (max-width : 1000px){
  margin: 0 auto;
  display: flex;
  align-items: center;
}

`


export const Column2 = styled.div`
 margin-bottom:15px;
 padding:0 15px;
 grid-area:col2;


`


export const TextWrapper = styled.div`
 max-width: 540px;
 padding-top:0;
 padding-bottom:20px;
 @media screen and (max-width : 1000px){
  align-items:center;
  text-align:center;
}
`


export const TopLine = styled.p`
 color:#9DC9D6;
 font-size:16px;
 line-height:16px;
 font-weight :700;
 letter-spacing:1.4px;
 text-transform: uppercase;
 margin-bottom: 16px;

`

export const Heading = styled.h1`

 margin-bottom: 24px;
 font-size:48px;
 line-height:1.1;
 font-weight:600;
 color:#000;


 @media screen and (max-width:480px)
 {
     font-size:32px;
 }

`


export const Subtitle = styled.p`
 margin-bottom:20px;
 font-size:18px;
 line-height:24px;
 color:${({darkText}) => (darkText ? '#010606' : '#000')};

`
export const Row = styled.div`
display: flex; flex-wrap: wrap;
column-gap: 10px;
@media screen and (max-width : 1000px){
  display: flex;
  align-items: center;
  justify-content: center;
}
`
export const Row2 = styled.div`

`

export const ColonCancerDetectorContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  align-items: center;
`;


export const DetectorContainer = styled.div`
  width: 600px;
  margin: 20px;
  height: 500px;
  border: 2px solid #000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TargetImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const SelectButton = styled.button`
border-radius: 50px;
background: #002D62;
white-space: nowrap;
padding: 10px 22px;
color: #010686;
font-size: 16px;
outline: none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
color:#F0F8FF;
&:hover {
    transition: all 0.2s ease-in-out;
}
`;
export const UploadButtonText =styled.div`
&.loading {
  clip-path: inset(0 1ch 0 0);
  animation: l 1s steps(4) infinite;
}
@keyframes l {
  to {
    clip-path: inset(0 -0.3ch 0 0)
  }
}
`;
export const TargetBox = styled.div`
  position: absolute;

  left: ${({ x }) => x + "px"};
  top: ${({ y }) => y + "px"};
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};

  border: 4px solid #1ac71a;
  background-color: transparent;
  z-index: 20;

  &::before {
    content: "${({ classType, score }) => `${classType} ${score.toFixed(1)}%`}";
    color: #1ac71a;
    font-weight: 500;
    font-size: 17px;
    position: absolute;
    top: -1.5em;
    left: -5px;
  }
`;
export const Result=styled.div`
margin-top:10px;
margin-left:20px;
color:${({goodresult}) => (goodresult ? '#26b324' : '#db0b0b')};
visibility: ${({shown}) => (shown ? "visible" : "hidden")};
@media screen and (max-width : 1000px){
  margin-top:10px;
  margin-left:0px;
  
}
`;
export const ResultBox=styled.div`
margin-top:10px;
margin-left:20px;

color:#000;
align-items: left;
justify-content: left;
@media screen and (max-width : 1000px){
  margin-top:10px;
  margin-left:0px;
  
}
`;
export const LoadingGrey=styled.div`
position:absolute;
top:0;
left:0;
height:0;
bottom:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.3);
visibility: ${({shown}) => (shown ? "visible" : "hidden")};

`;

export const WindMillDots=styled.div`
  position: absolute;
  top:46%;
  left:48%;
  width: 20px;
  height: 20px;
  justify-content: center;
  border-radius: 10px;
  background-color: #9880ff;
  color: #9880ff;
  transform-origin: 10px 30px;
  animation: dotWindmill 2s infinite linear;
&::before,  &::after {
  content: '';
  display: inline-block;
  position: absolute;
}

&::before {
  left: -15px;
  top: 30px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #9880ff;
  color: #9880ff;
}

&::after {
  left: 15px;
  top: 30px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #9880ff;
  color: #9880ff;
}

@keyframes dotWindmill {
  0% {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotateZ(720deg) translate3d(0, 0, 0);
  }
}
`;
