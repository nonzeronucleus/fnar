import React, { useState } from 'react';
import styled  from 'styled-components';


const Frame = styled.div`
    width:1200px;
    height:768px;
    overflow: hidden;

    background-color:blue;
    transition: text-indent 1s;
`;



const Inner = styled.div`
    position:absolute;
    width:1600px;
    height:768px;
    background-color:yellow;
    left:0px;
    top:0px;

    overflow: hidden;
    left: ${props => props.left}px;
    transition: left 1s;
`;


export default ({children}) => {
    const [pos, setPos] = useState(0);
    const [mouseInside, setMouseInside] = useState(false)
    const [mousePos, setMousePos] = useState({x:0,y:0});

    if(mouseInside) {
        if (mousePos.x < 250) {
            if (pos !== 0) {
                setPos(0)
            }
        }
        else if (mousePos.x < 950) {
            if (pos !== -200) {
                setPos(-200)
            }
        }
        else {
            if (pos !== -400) {
               setPos(-400)
            }
        }
    }

    return(
        <Frame
            onMouseEnter={() => setMouseInside(true)}
            onMouseLeave={() => setMouseInside(false)}
            onMouseMove={({clientX,clientY}) => setMousePos({x:clientX,y:clientY})}
            animate={mousePos.x<100}
        >
            <Inner left={pos} >
                {children}
            </Inner>>
        </Frame>
    );
}

