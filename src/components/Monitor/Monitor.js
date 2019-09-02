import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import {getSelectedRoom, getCharactersInSelectedRoom} from '../../redux/selectors';
import roomImages from '../../img/rooms';
import RadarMap from '../RadarMap';
import cameraImage from '../../img/rooms/camera-effect.gif'
import roomHasDoorRelease from './roomHasDoorRelease';
import Scroller from './Scroller'
import DoorRelase from './DoorRelease';
import CharacterImg from './CharacterImg';

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
                {roomHasDoorRelease(room) && <DoorRelase />}
                { charactersInRoom.map( (character, i)  => {
                    return <CharacterImg {...{character}} key={i} role="presentation" alt="" id="room" pos={i}/>
                })}
            </Scroller>
        </>
    )
}
