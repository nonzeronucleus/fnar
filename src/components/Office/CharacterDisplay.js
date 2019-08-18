import React from 'react';
import styled from 'styled-components';
import characterImages from '../../img/characters';

const CharacterDisplay = styled.img`
    position:absolute;
    width:300px;
    height:100px;
    background-color:green;
    left: ${props => props.left}px;
    top:666px;
`;

export default ({ character, left }) => {
    return <CharacterDisplay {...{ left }} src={characterImages[character]} />;
};
