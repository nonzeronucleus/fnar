import React, {useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import rooms from '../../consts/building/rooms';
import characters from '../../consts/characters';
import HiddenImage from '../HiddenImage';

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
    // const width = 1600;
    // const height = 768;

    const canvasRef = React.useRef(null)

    const paint = () => {
        const context = canvasRef.current.getContext("2d");
        let pos = 0;

        context.save();
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.drawImage(document.getElementById("room"),0,0);
        charactersInRoom.forEach( character => {
            const img = document.getElementById(character)
            context.drawImage(img,pos,0)
            pos+=img.width;
        });
        context.restore();
    }

    useEffect(() => {
        paint();
    })

    const onLoad = () => {
        paint();
    }

    return (
        <Frame>
            <canvas
                ref={canvasRef}
                width={1600}
                height={768}
            >
            </canvas>
            <HiddenImage src={roomImages[room]} role="presentation" alt="" id="room" onLoad={onLoad}/>

            {charactersInRoom.map( character => <HiddenImage src={characterImages[character]} role="presentation" alt="" key={character} id={character} onLoad={onLoad}/>)}


        </Frame>
    )
}
