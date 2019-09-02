import React from 'react';
import styled from 'styled-components';
import switchImageOff from '../../img/switch/switch-off.png';
// import switchImageOn from '../../img/switch/switch-on.png';

const SwitchImg = styled.img`
    position: absolute;
    top:400px;
    left:400px;
    z-index:4;
`;

export default () => {
    return <SwitchImg src={switchImageOff} />
}
