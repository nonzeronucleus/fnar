import React, {useState} from 'react';
import styled from 'styled-components';
import room from './img/office.png';
import doorClosed from './img/door-closed.png';
import doorOpen from './img/door-open.png';


const Frame = styled.div`
    width:1200px;
    height:768px;
    overflow: hidden;
    text-indent: ${props => props.left}px;
    transition: text-indent 1s;

    background-color:blue;
    position:absolute;
`;

const Container = styled.div`
    width:1920px;
    height:768px;
    position:absolute;
`;


const RoomImg = styled.img`
  position: absolute;
  top:0px;
  z-index: 2;
`;

const DoorDisplay = styled.img`
    top:240px;
    left: ${props => props.left || 0}px;

    position: relative;
    z-index: 2;
`;


export const Door = ({id, left, top}) => {
    const [open, setOpen] = useState([]);

    return open
        ? <DoorDisplay {...{left}} src={doorOpen} onClick={() => setOpen(false)}/>
        : <DoorDisplay {...{left}} src={doorClosed} onClick={() => setOpen(true)}/>
}



export default ({pos}) => (
    <Frame left={pos} >
      <Container>
          <RoomImg src={room} />
          <Door left={0}/>
          <Door left={600}/>
      </Container>
    </Frame>
)


