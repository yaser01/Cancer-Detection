import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
 background: ${({scrollNav}) => (scrollNav ? '#002D62' : 'transparent')};
 height: 80px;
 margin-top: -80px;
 margin-bottom: 0px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 10;

 @media screen and (max-width:960px)
 {
     transition : 0.8s all ease;
 }

`;

export const NavbarContainer = styled.div`
 height: 80px;
 display: flex;
 justify-content: space-between;
 padding: 0 24px;
 margin-bottom: 0px;
 width: 100%;
 z-index: 1;
 max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
 color:#f0f8ff;
 justify-self: flex-start;
 cursor: pointer;
 font-size:1.5rem;
 display: flex;
 align-items: center;
 margin-left: 24px;
 margin-bottom: 0px;
 font-weight: bold;
 text-decoration: none;
`;

export const MobileIcon = styled.div`
 display:none;

 @media screen and (max-width: 768px)
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
 display : flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: -22px;

 @media screen and (max-width: 768px)
 {
    display: none; 
 }
`

export const NavItem = styled.li`
 height : 80px;
 color: #F0F8FF;
`

export const NavLinks = styled(LinkS)`
 color:#F0F8FF;
 font-size: large;
 font-weight: bold;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding :0 3rem;
 height: 100%;
 cursor: pointer;
 &.active{
     border-bottom: 3px solid #9BC9D6;
 }
`;

export const NavBtn = styled.nav`
 display: flex;
 align-items: center;
 margin-bottom: 0px;
 @media screen and (max-width: 768px)
 {
     display:none;
 }

`

export const NavBtnLink = styled(LinkR)`
 border-radius: 50px;
 background: #fff;
 white-space: nowrap;
 padding: 10px 22px;
 color: #002D62;
 font-size: 16px;
 outline: none;
 border:none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 
 &:hover {
     transition: all 0.2s ease-in-out;
     background: #fff;
     color: #002D62;
 }
`