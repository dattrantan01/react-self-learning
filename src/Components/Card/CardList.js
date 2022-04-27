import React from 'react';
import Card from './Card';
import styled from 'styled-components'

const CardListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 90px 30px;
    padding: 30px;
`;
const CardList = (props) => {
    return (
        <CardListStyled>
            {props.children}
        </CardListStyled>
    );
};

export default CardList;