import React from 'react';
import styled, {keyframes} from 'styled-components';
import rooms from '../../consts/building/rooms';
import rainba from './characters/rainba.jpg';


const swing = keyframes`
    from {text-indent : -400px;}
    to {text-indent : 0px;}
`;


const Frame = styled.div`
    max-width:1200px;
    max-height:768px;
    overflow: hidden;
    /* text-indent: ${props => props.pos}px; */
    background-color:blue;
    transition: text-indent 1s;
    animation: ${swing} 6s linear infinite;
    animation-direction: alternate;
    position:relative;
`;

const Image = styled.img`
    max-width: initial;
    max-height: initial;
    position: relative;
`;



const CharacterImage = styled.img`
    /* position: relative; */
    max-width: initial;
    max-height: initial;
    top:0;
    left:0;
    position: absolute;
`;

const getRoomImage = (imgs, room) => ({
    ...imgs,
    [room]: require(`./img/${room}.jpg`)
})

const roomImages = Object.values(rooms).reduce(getRoomImage, {})

export default ({room, characters}) => (
    <Frame>
        <Image src={roomImages[room]} role="presentation" alt="" />
        {characters.includes("Rainba") && <CharacterImage src={rainba} />}
    </Frame>
)
