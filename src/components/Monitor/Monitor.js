import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled, {keyframes} from 'styled-components';
import {getSelectedRoom, getCharactersInSelectedRoom} from '../../redux/selectors';
import roomImages from '../../img/rooms';
import characterImages from '../../img/characters'
import RadarMap from '../RadarMap';
import cameraImage from '../../img/rooms/camera-effect.gif'



const entry = keyframes`
    from {
        transform: rotateX(-90deg);
        transform-origin: bottom;
    }
    to {
        transform: rotateX(0);
        transform-origin: bottom;
    }
`;

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
    /* transition: text-indent 1s; */
    animation: ${entry} 0.2s, ${swing} 8s ease-in-out infinite;
    animation-direction: alternate;
    position:absolute;
    /* transform: scale(2); */
    /* transition: transform 2.8s; */
    /* transition: all 1s; */
    transform-style: preserve-3d;
`;

const Container = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    width:1600px;
    height:768px;
`;

const RoomImg = styled.img`
  position: absolute;
  top:0px;
  z-index: 2;
`;

const CameraImage = styled.img`
    position:absolute;
    top:0px;
    left:0px;
    width:1600px;
    height:768px;
    z-index:3;
    opacity:0.6;
`;


const CharacterImg = styled.img`
    position: relative;
    top:0px;
    left: ${props => props.pos*180}px;
    z-index: 2;
`;


export default () => {
    const mapState = useCallback(
        state => ({
          room: getSelectedRoom(state),
          charactersInRoom: getCharactersInSelectedRoom(state),
        }), []
    );

    const {room, charactersInRoom} = useMappedState(mapState);

    return (
        <>
            <Frame>
                <CameraImage src={cameraImage} />
                <RadarMap />
                <Container>
                    <RoomImg src={roomImages[room]} role="presentation" alt="" id="room"/>
                    { charactersInRoom.map( (character, i)  => {
                        return <CharacterImg src={characterImages[character]} key={i} role="presentation" alt="" id="room" pos={i}/>
                    })}
                </Container>
            </Frame>
        </>
    )
}
