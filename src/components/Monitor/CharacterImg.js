import React from 'react';
import styled from 'styled-components';
import characterImages from '../../img/characters'

const CharacterImg = styled.img`
    position: absolute;
    top:0px;
    left: ${props => props.pos*180}px;
    z-index: 2;
`;

export default ({character, pos}) => <CharacterImg src={characterImages[character]} role="presentation" alt="" id="room" />
