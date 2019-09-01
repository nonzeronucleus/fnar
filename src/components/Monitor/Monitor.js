import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import {getSelectedRoom, getCharactersInSelectedRoom} from '../../redux/selectors';
import roomImages from '../../img/rooms';
import characterImages from '../../img/characters'
import RadarMap from '../RadarMap';
import cameraImage from '../../img/rooms/camera-effect.gif'
import roomHasDoorRelease from './roomHasDoorRelease';
import switchImage from '../../img/switch/switch-off.png';
import Scroller from './Scroller'



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
    position: absolute;
    top:0px;
    left: ${props => props.pos*180}px;
    z-index: 2;
`;

const SwitchImg = styled.img`
    position: absolute;
    top:400px;
    left:400px;
    z-index:4;
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
            <RadarMap />
            <CameraImage src={cameraImage} />

            <Scroller>
                <RoomImg src={roomImages[room]} role="presentation" alt="" id="room"/>
                {roomHasDoorRelease(room) && <SwitchImg src={switchImage} />}
                { charactersInRoom.map( (character, i)  => {
                    return <CharacterImg src={characterImages[character]} key={i} role="presentation" alt="" id="room" pos={i}/>
                })}
            </Scroller>
        </>
    )
}
