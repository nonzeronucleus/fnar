import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import Office from '../Office';
import rooms from '../../consts/rooms';
import {getSelectedRoom, getCharactersInSelectedRoom} from '../../redux/selectors';
import Monitor from '../Monitor';
import DisplayToggle from '../DisplayToggle';

const Display = styled.div`
    width:1600px;
    height:768px;

`;

const Middle = () => {
    const mapState = useCallback(
        state => ({
          room: getSelectedRoom(state),
          charactersInRoom: getCharactersInSelectedRoom(state)
        }), []
      );

      const {room, charactersInRoom} = useMappedState(mapState);

      return (
        <>
          {room === rooms.OFFICE
                ? <Office/>
                : <Monitor {...{room, charactersInRoom}} />
          }
          <DisplayToggle />
        </>
      )
}



export default () => <Display><Middle /></Display>


