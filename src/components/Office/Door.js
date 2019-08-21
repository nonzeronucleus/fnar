import React, {useCallback} from 'react';
import {useMappedState} from 'redux-react-hook';

import styled from 'styled-components';
import {getCharactersInRoom, isDoorOpen, isPlaying, getPower} from '../../redux/selectors';
import {useDispatch} from 'redux-react-hook';
import doorClosed from '../../img/office/door-closed.png';
import doorOpen from '../../img/office/door-open.png';
import Character from './CharacterDisplay';
import * as actions from '../../redux/actions';

const DoorDisplay = styled.img`
    position:absolute;
    left: ${props => props.left}px;
    top: 252px;
`;

export default ({room, left}) => {
  const dispatch = useDispatch()

  const toggleDoor = isOpen => dispatch(actions.toggleDoor({room, isOpen}))

  const mapState = useCallback(
    state => ({
      charactersInRoom: getCharactersInRoom(state, room),
      open: isDoorOpen(state, room),
      playing: isPlaying(state),
      power: getPower(state)
    }), [room]
  );

  const {charactersInRoom, open, playing, power} = useMappedState(mapState);

  return <>
      {charactersInRoom.length > 0 && <Character character={charactersInRoom[0]} {...{left}} />}

      <DoorDisplay {...{left}} src={open ? doorOpen: doorClosed} onClick={() => playing && power> 0 && toggleDoor(!open)}/>
    </>
}
