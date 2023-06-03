import styled from "@emotion/styled";
import picture from "images/picture.png";
import logo from "images/Logo.png";
import rectangle from "images/Rectangle.png";

export const TweetCardStyled = styled.li`
    position: relative;
    width: 368px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 48px;
    padding-top: 178px;
    padding-bottom: 36px;
    border-radius: 20px;
    text-align: center; 
    background-image: url(${rectangle}), url(${logo}), url(${picture}), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    background-position-y: 218px, 20px, 28px, 0;
    background-position-x: 0, 20px, 36px, 0;
    background-repeat: no-repeat;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const BadgeStyled = styled.img`
    position: absolute;
    top: 178px;
    left: 184px;
    translate: -50%;
`;

export const AvatarStyled = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 26px;
`;

export const TweetTextStyled = styled.p`
    color: #EBD8FF;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.22;
    margin-bottom: 16px;
`;

export const FollowButtonStyled = styled.button`
    width: 196px;
    margin-top: 10px;
    font-size: 18px;
    line-height: 1.22;
    font-weight: 600;
    color: #373737;
    padding: 14px 28px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    background-color: #EBD8FF;
`;

export const FollowingButtonStyled = styled.button`
    width: 196px;
    margin-top: 10px;
    font-size: 18px;
    line-height: 1.22;
    font-weight: 600;
    color: #373737;
    padding: 14px 28px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    background-color: #5CD3A8;
`;