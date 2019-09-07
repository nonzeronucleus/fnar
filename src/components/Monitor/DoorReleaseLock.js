import React from 'react';
import styled from 'styled-components';
import lockClosed from '../../img/rooms/lock-closed.png';
import lockOpen from '../../img/rooms/lock-open.png'

const LockImage = styled.img`
    position: absolute;
    top:200px;
    left:400px;
    z-index:4;
`;

export default ({active}) => (
    <LockImage src={active ? lockClosed : lockOpen} />
)
