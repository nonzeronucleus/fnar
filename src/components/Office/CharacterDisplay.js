import React from 'react';
import styled from 'styled-components';
import characterImages from '../../img/characters';

const CharacterDisplay = styled.img`
    position:absolute;
    width:300px;
    background-color:green;
    left: ${props => props.left}px;
    top:266px;
    z-index: ${props => props.zIndex};
`;

export default ({ character, left, zIndex = 0 }) => {
    return <CharacterDisplay {...{ left, zIndex }} src={characterImages[character]} />;
};
