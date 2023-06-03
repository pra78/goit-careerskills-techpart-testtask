import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const HomePageStyled = styled.div`
    background-color: #DDE6ED;
    text-align: left;
`;

export const NavBarStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 26px;
    padding-bottom: 26px;
    background-color: #9DB2BF;
    margin-bottom: 48px;
`

export const NavLinkStyled = styled(NavLink)`
    color: #27374D;
    &:hover,
    &:focus {
        color: #E57C23;
    }
`;

export const HeaderTextStyled = styled.h1`
    color: #27374D;
    font-weight: 600;
    font-size: 36px;
`;

export const TextPageStyled = styled.div`
    margin-left: 40px;
`;

export const TechStackStyled = styled.p`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const PrintScreenStyled = styled.img`
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
`;