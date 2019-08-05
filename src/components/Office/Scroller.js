import React, { useState } from 'react';
import styled  from 'styled-components';
import Office from './Office';


const Frame = styled.div`
    max-width:1200px;
    max-height:768px;
    overflow: hidden;
    text-indent: ${props => props.pos}px;
    background-color:blue;
    transition: text-indent 1s;
`;


export default () => {
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
            pos={pos}
            animate={mousePos.x<100}
        >
            <Office />
        </Frame>
    );
}

