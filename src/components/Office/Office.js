import React, {useState} from 'react';
import styled from 'styled-components';
import room from './img/office.png';
import doorClosed from './img/door-closed.png';
import doorOpen from './img/door-open.png';


const Container = styled.div`
    position:relative;
    top:0px;
    left: ${props => props.left}px;

    transition: left 1s;
`;


const Img1 = styled.img`
  /* border: 1px solid #f00; */
  position: relative;
  top:0px;
  z-index: 2;
`;

const DoorDisplay = styled.img`
  /* border: 1px solid #f00; */
  top:-500px;
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
    <Container left={pos} >
        <Img1 src={room} />
        <Door left={0}/>
        <Door left={600}/>
    </Container>
)


