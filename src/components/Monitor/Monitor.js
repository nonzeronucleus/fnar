import React from 'react';
import styled, {keyframes} from 'styled-components';
// import characters from '../../consts/characters';
import roomImages from './img';
import characterImages from './characters';

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


// const getImage = (path) => async (imgPromises, key) => {
//     const img = await import(`./${path}/${key}.jpg`);
//     const imgs = await imgPromises;

//     return ({
//         ...imgs,
//         [key]: img.default
//     } )
// }


// // const getRoomImage = getImage('img')
// const getCharacterImage = getImage('characters')


// // let roomImages;
// let characterImages;

// const init = async () => {
//     characterImages = await Object.values(characters).reduce(getCharacterImage, {})
// }

// init();


export default ({room, charactersInRoom}) => {
    return (
        <Frame>
            <Container>
                <RoomImg src={roomImages[room]} role="presentation" alt="" id="room"/>
                { charactersInRoom.map( (character, i)  => {
                    return <CharacterImg src={characterImages[character]} key={i} role="presentation" alt="" id="room" pos={i}/>
                })}
            </Container>
        </Frame>
    )
}
