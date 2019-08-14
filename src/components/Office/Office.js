import React from 'react';
import styled from 'styled-components';

import office from '../../img/office/office.png';
import Scroller from './Scroller';
import Door from './Door';
import Rooms from '../../consts/building/rooms'

const BackgroundDisplay = styled.img`
    position:absolute;
    width:100%;
    height:100%;
    background-color:pink;
    left:10px;
    top:10px;
`;




export default ({pos}) => (
    <Scroller>
        <BackgroundDisplay src={office}/>

        <Door room={Rooms.LEFT_DOOR} left={0}/>
        <Door room={Rooms.RIGHT_DOOR} left={1200}/>
    </Scroller>
)