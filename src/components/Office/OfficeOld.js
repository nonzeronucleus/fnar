import React, {useState, useCallback} from 'react';
// // import styled from 'styled-components';
import styled, {keyframes} from 'styled-components';

import office from '../../img/office/office.png';
import doorClosed from '../../img/office/door-closed.png';
import doorOpen from '../../img/office/door-open.png';
import characters from '../../consts/characters';
import characterImages from '../../img/characters'


const Frame = styled.div`
    width:1200px;
    height:768px;
    overflow: hidden;
    text-indent: ${props => props.left}px;
    transition: text-indent 1s;

    background-color:blue;
    position:absolute;
`;

// const Container = styled.div`
//     width:1920px;
//     height:768px;
//     position:absolute;
// `;

// const swing = keyframes`
//     from {text-indent : -400px;}
//     to {text-indent : 0px;}
// `;


// const Frame = styled.div`
//     width:1200px;
//     height:768px;
//     overflow: hidden;
//     /* text-indent: ${props => props.pos}px; */
//     background-color:blue;
//     transition: text-indent 1s;
//     animation: ${swing} 6s linear infinite;
//     animation-direction: alternate;
//     position:absolute;
// `;

const Container = styled.div`
    position:absolute;
    width:1600px;
    height:768px;
`;

const RoomImg = styled.img`
  position: absolute;
  top:0px;
  z-index: 2;
`;


const DoorWrapper = styled.div`
    top:240px;
    left: ${props => props.left || 0}px;

    position: relative;
    z-index: 2;
`;

const DoorDisplay = styled.img`
    top:240px;
    left: ${props => props.left || 0}px;

    position: absolute;
    z-index: 2;
`;

const BehindDoorDisplay = styled.img`
    top:240px;
    left: ${props => props.left || 0}px;

    position: relative;
    z-index: 2;
`;




const Door = ({left}) => {
    const [open, setOpen] = useState([]);

    return open
                ? <DoorDisplay {...{left}} src={doorOpen} onClick={() => setOpen(false)}/>
                : <DoorDisplay {...{left}} src={doorClosed} onClick={() => setOpen(true)}/>

}

const BehindDoor = ({room, left}) => {
    return <BehindDoorDisplay src={characterImages[characters.MERWING]} role="presentation" alt="" id="room" pos={0}/>
}



export default ({pos}) => (
    <Frame left={pos} >
      <Container>
          <RoomImg src={office} />
          <Door left={0}/>
          <Door left={600}/>
      </Container>
    </Frame>
)




// const Frame = styled.div`
//     width:1200px;
//     height:768px;
//     overflow: hidden;
//     /* text-indent: ${props => props.pos}px; */
//     background-color:blue;
//     transition: text-indent 1s;
//     animation: ${swing} 6s linear infinite;
//     animation-direction: alternate;
//     position:absolute;
// `;

// const Container = styled.div`
//     position:absolute;
//     width:1600px;
//     height:768px;
// `;

// const RoomImg = styled.img`
//   position: absolute;
//   top:0px;
//   z-index: 2;
// `;


// const CharacterImg = styled.img`
//     position: relative;
//     top:0px;
//     /* left: ${props => props.pos*180}px; */
//     z-index: 2;
// `;


// export default ({pos}) => {
//     return    <Frame left={pos} >
//             <Container>
//                 <RoomImg src={office} role="presentation" alt="" id="room"/>
//                 <Door left={0}/>

//                 </Container>
//         </Frame>

// }


