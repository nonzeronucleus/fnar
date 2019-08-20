import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import styled, {keyframes} from 'styled-components';
import {getSelectedRoom, getCharactersInSelectedRoom} from '../../redux/selectors';
import roomImages from '../../img/rooms';
import characterImages from '../../img/characters'
import RadarMap from '../RadarMap';

const swing = keyframes`
    from {text-indent : -400px;}
    to {text-indent : 0px;}
`;


const Frame = styled.div`
    width:1200px;
    height:768px;
    overflow: hidden;
    /* text-indent: ${props => props.pos}px; */
    background-color:blue;
    transition: text-indent 1s;
    animation: ${swing} 6s linear infinite;
    animation-direction: alternate;
    position:absolute;
`;

const Container = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    width:1600px;
    height:768px;
`;

const RoomImg = styled.img`
  position: absolute;
  top:0px;
  z-index: 2;
`;


const CharacterImg = styled.img`
    position: relative;
    top:0px;
    left: ${props => props.pos*180}px;
    z-index: 2;
`;


export default () => {
    const mapState = useCallback(
        state => ({
          room: getSelectedRoom(state),
          charactersInRoom: getCharactersInSelectedRoom(state),
        }), []
    );

    const {room, charactersInRoom} = useMappedState(mapState);

    return (
        <>
            <Frame>
                <RadarMap />
                <Container>
                    <RoomImg src={roomImages[room]} role="presentation" alt="" id="room"/>
                    { charactersInRoom.map( (character, i)  => {
                        return <CharacterImg src={characterImages[character]} key={i} role="presentation" alt="" id="room" pos={i}/>
                    })}
                </Container>
            </Frame>
        </>
    )
}



// import React, {useCallback}  from 'react';
// import {useMappedState} from 'redux-react-hook';
// import styled from 'styled-components';
// import Office from '../Office';
// import {getSelectedRoom, getCharactersInSelectedRoom, isShowingCamera} from '../../redux/selectors';
// import Monitor from '../Monitor';
// import DisplayToggle from '../DisplayToggle';

// const Display = styled.div`
//     width:1600px;
//     height:768px;

// `;

// const Middle = () => {
//     const mapState = useCallback(
//         state => ({
//           room: getSelectedRoom(state),
//           charactersInRoom: getCharactersInSelectedRoom(state),
//           showCamera: isShowingCamera(state),
//         }), []
//       );

//       const {room, charactersInRoom, showCamera} = useMappedState(mapState);

//       return (
//         <>
//           {showCamera
//             ?  <Monitor {...{room, charactersInRoom}} />
//             : <Office/>
//           }
//           <DisplayToggle />
//         </>
//       )
// }



// export default () => <Display><Middle /></Display>


