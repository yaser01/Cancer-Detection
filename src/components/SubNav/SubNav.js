import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
 background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
 height: 80px;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 top: 0;
 background-color: #002D62;
 margin-bottom: 0px;
 @media screen and (max-width:960px)
 {
     transition : 0.8s all ease;
 }

`;

export const NavbarContainer = styled.div`
 height: 80px;
 display: flex;
 flex-direction: row;
 padding: 0 24px;
 width: 100%;
 z-index: 1;
 background-color: #002D62;
 
`;
export const NavLogo = styled(LinkR)`
 color:#F0F8FF;
 justify-self: flex-start;
 cursor: pointer;
 font-size:1.8rem;
 display: flex;
 align-items: center;
 margin-left: 24px;
 font-weight: bold;
 text-decoration: none;
`;

export const MobileIcon = styled.div`
 display:none;

 @media screen and (max-width: 900px)
 {
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer;
     color:#F0F8FF;
 }
`


export const NavMenu = styled.ul`
 margin-right: auto;
 display : flex;
 align-items: center;
 list-style: none;
 text-align: center;
 @media screen and (max-width: 900px)
 {
    display: none; 
 }
`

export const NavItem = styled.li`
 height : 80px;
 color:#F0F8FF;
`

export const NavLinks = styled(LinkS)`
 color: #F0F8FF;
 font-size: large;
 font-weight: bold;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding :0 3rem;
 height: 100%;
 cursor: pointer;


 &.active{
     border-bottom: 3px solid #7CD7F7;
 }
`;

export const NavBtn = styled.nav`
 display: flex;
 align-items: center;

 @media screen and (max-width: 900px)
 {
     display:none;
 }

`

export const NavBtnLink = styled(LinkR)`
 white-space: nowrap;
 overflow: hidden;
 color: #F0F8FF;
 font-size: large;
 font-weight: bold;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding :0 2rem;
 display: inline-block;
 float:left;
 cursor: pointer;



 &.active{
     border-bottom: 3px solid #002D62;
 }
 &.contact{
    display: inline-block;
    float:right;

 }
`