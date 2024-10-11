import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;


export const LogoContainerLink = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    //background-color: aqua;
`;


export const NavLinkContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content:flex-end;
    font-size:medium;
    align-items: center;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    //margin-top: 20px;
    //align-content: end;
    //background-color: aqua;
`;

export const NavLinkSpan = styled.span`
    
`;
