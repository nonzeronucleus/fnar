import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import Office from '../Office';
import rooms from '../../consts/building/rooms';
import {getSelectedRoom, getCharactersInRoom} from '../../redux/selectors';
import Monitor from '../Monitor';

const Display = styled.div`
    width:1600px;
    height:768px;

`;

const Middle = () => {
    const mapState = useCallback(
        state => ({
          room: getSelectedRoom(state),
          charactersInRoom: getCharactersInRoom(state)
        }), []
      );

      const {room, charactersInRoom} = useMappedState(mapState);

      return (room === rooms.OFFICE
                ? <Office/>
                : <Monitor {...{room, charactersInRoom}} />
            )
}



export default () => <Display><Middle /></Display>


