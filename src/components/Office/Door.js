import React, {useState, useCallback} from 'react';
import {useMappedState} from 'redux-react-hook';

import styled from 'styled-components';
import {getCharactersInRoom, getSelectedRoom, getCharactersInSelectedRoom} from '../../redux/selectors';
import characterImages from '../../img/characters'


import doorClosed from '../../img/office/door-closed.png';
import doorOpen from '../../img/office/door-open.png';

const CharacterDisplay = styled.img`
    position:absolute;
    width:300px;
    height:100px;
    background-color:green;
    left: ${props => props.left}px;
    top:666px;
`;


const Character = ({character, left}) => {
    return <CharacterDisplay  {...{left}}  src={characterImages[character]} />
}



const DoorDisplay = styled.img`
    position:absolute;
    left: ${props => props.left}px;
    top: 240px;
`;

export default ({room, left}) => {
    const mapState = useCallback(
        state => ({
          charactersInRoom: getCharactersInRoom(state, room)
        }), [room]
      );

    //   const {charactersInRoom} = useMappedState(mapState);
      const [open, setOpen] = useState([]);



    const {charactersInRoom} = useMappedState(mapState);


    return <>
        {
            charactersInRoom.length > 0 && <Character character={charactersInRoom[0]} {...{left}} />
        }

        {open
            ? <DoorDisplay {...{left}} src={doorOpen} onClick={() => setOpen(false)}/>
            : <DoorDisplay {...{left}} src={doorClosed} onClick={() => setOpen(true)}/>}
        </>

}
