import React, { useState } from 'react';
import styled  from 'styled-components';
import scene from './img/office.png'

const Frame = styled.div`
    max-width:1200px;
    overflow: hidden;
    text-indent: ${props => props.pos}px;
    background-color:blue;
    transition: text-indent 1s;
`;

const Image = styled.img`
    max-width: initial;
`;

export default () => {
    const [pos, setPos] = useState(0);
    const [mouseInside, setMouseInside] = useState(false)
    const [mousePos, setMousePos] = useState({x:0,y:0})

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
        // console.log(mousePos)
    }


    return(
        <div>
            <Frame
                onMouseEnter={() => setMouseInside(true)}
                onMouseLeave={() => setMouseInside(false)}
                onMouseMove={({clientX,clientY}) => setMousePos({x:clientX,y:clientY})}
                pos={pos}
                animate={mousePos.x<100}
            >
                <Image src={scene} alt="main"/>
            </Frame>
            <button onClick={() => setPos(0)}>Left</button>
            <button onClick={() => setPos(-200)}>Centre</button>
            <button onClick={() => setPos(-400)}>Right</button>
            { mouseInside && JSON.stringify(mousePos)}
        </div>
    );
}

