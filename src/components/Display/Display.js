import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import ScrollableImage from '../ScrollableImage';
import rooms from '../../consts/building/rooms';
import {getSelectedRoom} from '../../redux/selectors';
import Monitor from '../Monitor';

const Display = styled.div`
    width:1600px;
    height:768px;

`;

const Middle = () => {
    const mapState = useCallback(
        state => ({
          selectedRoom: getSelectedRoom(state),
        }), []
      );

      const {selectedRoom} = useMappedState(mapState);

      return (selectedRoom === rooms.OFFICE
                ? <ScrollableImage/>
                : <Monitor room={selectedRoom} />
            )
}



export default () => <Display><Middle /></Display>


