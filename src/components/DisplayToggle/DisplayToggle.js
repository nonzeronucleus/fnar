import React, {useCallback} from 'react';
import {useMappedState} from 'redux-react-hook';
import {useDispatch} from 'redux-react-hook';
import styled from 'styled-components';
import * as actions from '../../redux/actions';
import {isPlaying, getPower} from '../../redux/selectors';


const DisplayToggle = styled.div`
    width: 400px;
    height: 50px;
    left: 400px;
    top: 700px;
    position: absolute;
    background-color:transparent;
    border-width:6px;
    border-style:solid;
    border-color:lightgray;
    border-radius:10px;
    z-index:3;
`;

const InnerLine = styled.div`
    width: 200px;
    height: 0px;
    left: 110px;
    top: ${props => props.top}px;
    position: absolute;
    background-color: transparen;
    border-width: 3px;
    border-style: solid;
    border-color: lightgray;
    border-radius: 10px;
    z-index: 3;
`;



export default () => {
    const mapState = useCallback(
      state => ({
        playing: isPlaying(state),
        power: getPower(state),

      }), []
    );

    const {playing, power} = useMappedState(mapState);

    const dispatch = useDispatch()

    const toggle = () => {playing && power && dispatch(actions.toggleCamera())};

    return <DisplayToggle onClick={toggle}><InnerLine top={4} /><InnerLine top={12} /></DisplayToggle>
}
