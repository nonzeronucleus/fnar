import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled from 'styled-components';
import Office from '../Office';
import {getSelectedRoom, getCharactersInSelectedRoom, isShowingCamera} from '../../redux/selectors';
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
          charactersInRoom: getCharactersInSelectedRoom(state),
          showCamera: isShowingCamera(state),
        }), []
      );

      const {room, charactersInRoom, showCamera} = useMappedState(mapState);

      return (
        <>
          {showCamera
            ?  <Monitor {...{room, charactersInRoom}} />
            : <Office/>
          }
          <DisplayToggle />
        </>
      )
}



export default () => <Display><Middle /></Display>


