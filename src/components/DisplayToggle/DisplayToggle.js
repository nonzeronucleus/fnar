import React  from 'react';
import {useDispatch} from 'redux-react-hook';
import styled from 'styled-components';
import * as actions from '../../redux/actions';

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
    const dispatch = useDispatch()

    const toggle = () => dispatch(actions.toggleCamera())

    // const mapState = useCallback(
    //     state => ({
    //       room: getSelectedRoom(state),
    //       charactersInRoom: getCharactersInSelectedRoom(state)
    //     }), []
    //   );

    //   const {room, charactersInRoom} = useMappedState(mapState);

    return <DisplayToggle onClick={toggle}><InnerLine top={4} /><InnerLine top={12} /></DisplayToggle>
}
