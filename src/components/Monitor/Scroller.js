import React from 'react';
import styled, {keyframes} from 'styled-components';


const entry = keyframes`
    from {
        transform: rotateX(-90deg);
        transform-origin: bottom;
    }
    to {
        transform: rotateX(0);
        transform-origin: bottom;
    }
`;

const swing = keyframes`
    from {left : -400px;}
    to {left : 0px;}
`;


const Frame = styled.div`
    width:1200px;
    height:768px;
    overflow: hidden;
    position:absolute;
    top:0px;
    left:0px;

    transition: text-indent 1s;
`;



const Inner = styled.div`
    width:1920px;
    height:768px;
    overflow: hidden;
    background-color:blue;
    animation: ${entry} 0.2s, ${swing} 8s ease-in-out infinite;
    animation-direction: alternate;
    position:absolute;
    transform-style: preserve-3d;
`;


export default ({scroll, children}) => {
    return(
        <Frame>
            <Inner>
                {children}
            </Inner>
        </Frame>
    );
}

