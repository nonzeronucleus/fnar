import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import ScrollableImage from '../ScrollableImage';
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
          characters: getCharactersInRoom(state)
        }), []
      );

      const {room, characters} = useMappedState(mapState);

      return (room === rooms.OFFICE
                ? <ScrollableImage/>
                : <Monitor {...{room, characters}} />
            )
}



export default () => <Display><Middle /></Display>


