import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import {getSelectedRoom, getCharactersInSelectedRoom, getDoorReleaseInSelectedRoom} from '../../redux/selectors';
import roomImages from '../../img/rooms';
import RadarMap from '../RadarMap';
import cameraImage from '../../img/rooms/camera-effect.gif'
import Scroller from './Scroller'
import DoorRelase from './DoorRelease';
import CharacterImg from './CharacterImg';
import DoorReleaseLock from './DoorReleaseLock';

const RoomImg = styled.img`
  position: absolute;
  top:0px;
  z-index: 2;
`;

const CameraImage = styled.img`
    position:absolute;
    top:0px;
    left:0px;
    width:1200px;
    height:768px;
    z-index:3;
    opacity:0.6;
`;

export default () => {
    const mapState = useCallback(
        state => ({
          room: getSelectedRoom(state),
          charactersInRoom: getCharactersInSelectedRoom(state),
          doorRelease: getDoorReleaseInSelectedRoom(state),
        //   doorReleaseLock()
        }), []
    );

    const {room, charactersInRoom, doorRelease} = useMappedState(mapState);
    return (
        <>
            <RadarMap />
            <CameraImage src={cameraImage} />

            <Scroller>
                <RoomImg src={roomImages[room]} role="presentation" alt="" id="room"/>
                {doorRelease !==null && <DoorReleaseLock active={false} />}
                {doorRelease !==null && <DoorRelase active={doorRelease}/>}
                { charactersInRoom.map( (character, i)  => {
                    return <CharacterImg {...{character}} key={i} role="presentation" alt="" id="room" pos={i}/>
                })}
            </Scroller>
        </>
    )
}
