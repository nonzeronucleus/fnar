import React, {useCallback} from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import Character from './CharacterDisplay';
import {getCharactersInRoom, isPlaying} from '../../redux/selectors';
import office from '../../img/office/office.png';
import Scroller from './Scroller';
import Door from './Door';
import rooms from '../../consts/rooms'

const BackgroundDisplay = styled.img`
    position:absolute;
    width:100%;
    height:100%;
    background-color:pink;
    left:10px;
    top:10px;
`;




export default ({pos}) => {
    const mapState = useCallback(
        state => ({
          charactersInRoom: getCharactersInRoom(state, rooms.OFFICE),
          playing: isPlaying(state),
        }), []
      );

    const {charactersInRoom, playing} = useMappedState(mapState);

    return (
        <Scroller scroll={playing}>
            {charactersInRoom.length > 0 && <Character character={charactersInRoom[0]} left={600} zIndex={2} />}
            <BackgroundDisplay src={office}/>

            <Door room={rooms.LEFT_DOOR} left={0}/>
            <Door room={rooms.RIGHT_DOOR} left={1200}/>
        </Scroller>
    )
}