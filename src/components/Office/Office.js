import React, {useCallback} from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import Character from './CharacterDisplay';
import {getCharactersInRoom, getGameState} from '../../redux/selectors';
import office from '../../img/office/office.png';
import Scroller from './Scroller';
import Door from './Door';
import rooms from '../../consts/rooms'
import PowerMeter from '../PowerMeter';
import gameStates from '../../consts/gameStates';

const BackgroundDisplay = styled.img`
    position:absolute;
    width:100%;
    height:100%;
`;

const HUD = styled.div`
    position:absolute;
    left:900px;
    top:50px;
    z-index: 5;
`;


const Win = styled.div`
    color:white;
`

export default ({pos}) => {
    const mapState = useCallback(
        state => ({
          charactersInRoom: getCharactersInRoom(state, rooms.OFFICE),
          currentGameSate: getGameState(state),
        }), []
      );

    const {charactersInRoom, currentGameSate} = useMappedState(mapState);
    console.log(currentGameSate)

    return (
        <>
            <HUD>
                <PowerMeter />
                {currentGameSate === gameStates.WON && <Win>YOU WON</Win>}
            </HUD>

            <Scroller scroll={currentGameSate === gameStates.IN_PROGRESS}>

                {charactersInRoom.length > 0 && <Character character={charactersInRoom[0]} left={600} zIndex={2} />}
                <BackgroundDisplay src={office}/>

                <Door room={rooms.LEFT_DOOR} left={0}/>
                <Door room={rooms.RIGHT_DOOR} left={1200}/>
            </Scroller>

        </>
    )
}