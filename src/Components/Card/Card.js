import React from 'react';
import styled, { css } from 'styled-components'

const CardStyled = styled.div`
    position: relative;
    /* margin-top: 100px; */
    /* width: 400px; */
`;
const CardImageWrapper = styled.div`
    height: 450px;
    width: 100%;
    border-radius: 10px;
`;
const CardImage = styled.img`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;
const CardContent = styled.div`
    position: absolute;
    background-color: white;
    left: 50%;
    width: calc(100% - 36px);
    transform: translate(-50%, 50%);
    bottom: 0;
    z-index: 2;
    border-radius: 20px;
    padding: 20px;
`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;
const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const CardUserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    object-fit: cover;
`;
const CardUserName = styled.span`
    font-weight: 300;
    font-size: 16px;
    color: #333;
`;
const CardBot = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;
const CardBotTitle = styled.h3`
    font-weight: 600;
    font-size: 16px;
    color: black;

`;
const CardBotNumber = styled.span`
    font-size: 18px;
    font-weight: bold;
    /* background: linear-gradient( #c6ffdd, #fbd786, #f7797d); */
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
    ${(props) => 
        props.sec &&
        css`
            background: linear-gradient(#c6ffdd, #fbd786, #f7797d);
        `
    };

    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    
`
const CardTopNumber = styled.span `
    font-weight: 600;
`;
const CardHeartIcon = styled.img`
    margin-left: 12px;
    display: inline-block;
`;
const CardIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 12px;
`;
const Card = (props) => {
    return (
        <CardStyled>
            <CardImageWrapper>
                <CardImage src="https://cdn.dribbble.com/users/2400293/screenshots/18034200/media/7c9ad36bd345b48cdb1a1db87ba5d096.png?compress=1&resize=1200x900&vertical=top" alt="" />
            </CardImageWrapper>
            <CardContent>
                <CardTop>
                    <CardUser>
                        <CardUserImage src="https://images.unsplash.com/photo-1650827788529-d12062e0351f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt="" />
                        <CardUserName>@hieulinux</CardUserName>
                    </CardUser>
                    <CardIcon>
                        <CardHeartIcon src="/coolicon.svg" />
                        <CardTopNumber>{props.number || 256}</CardTopNumber>
                    </CardIcon>
                </CardTop>
                <CardBot>
                   <CardBotTitle>Cosmic Perspective</CardBotTitle>
                   <CardBotNumber sec = {props.secondary}>12000 vnd</CardBotNumber>
                </CardBot>
            </CardContent>
           
           
        </CardStyled>
    );
};

export default Card;