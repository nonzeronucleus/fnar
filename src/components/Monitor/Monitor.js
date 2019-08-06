import React from 'react';
import styled, {keyframes} from 'styled-components';
import rooms from '../../consts/building/rooms';
import characters from '../../consts/characters';

const swing = keyframes`
    from {text-indent : -400px;}
    to {text-indent : 0px;}
`;


const Frame = styled.div`
    width:1200px;
    height:768px;
    overflow: hidden;
    /* text-indent: ${props => props.pos}px; */
    background-color:blue;
    transition: text-indent 1s;
    animation: ${swing} 6s linear infinite;
    animation-direction: alternate;
    position:absolute;
`;

const Container = styled.div`
    position:absolute;
    width:1600px;
    height:768;
`;

const RoomImg = styled.img`
  position: absolute;
  top:0px;
  z-index: 2;
`;


const CharacterImg = styled.img`
    position: relative;
    top:0px;
    /* left: ${props => props.pos*180}px; */
    z-index: 2;
`;




const getRoomImage = (imgs, room) => ({
    ...imgs,
    [room]: require(`./img/${room}.jpg`)
})

const getCharacterImage = (imgs, room) => ({
    ...imgs,
    [room]: require(`./characters/${room}.jpg`)
})


const roomImages = Object.values(rooms).reduce(getRoomImage, {})
const characterImages = Object.values(characters).reduce(getCharacterImage, {})

export default ({room, charactersInRoom}) => {
    return (
        <Frame>
            <Container>
                <RoomImg src={roomImages[room]} role="presentation" alt="" id="room"/>
                { charactersInRoom.map( (character, i)  => {
                    return <CharacterImg src={characterImages[character]} role="presentation" alt="" id="room" pos={i}/>
                })}
            </Container>
        </Frame>
    )
}
