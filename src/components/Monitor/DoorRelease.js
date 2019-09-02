import React from 'react';
import styled from 'styled-components';
import switchImage from '../../img/switch/switch-off.png';

const SwitchImg = styled.img`
    position: absolute;
    top:400px;
    left:400px;
    z-index:4;
`;

export default () => <SwitchImg src={switchImage} />
