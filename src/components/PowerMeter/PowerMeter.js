import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import {getPower} from '../../redux/selectors';
import { Stage, Layer, Rect, Text} from 'react-konva';


const colors ={
    10:"red",
    30:"orange",
    60:"yellow",
    100:"lightgreen",
}



export default () => {
    const mapState = useCallback(
        state => ({
          power: getPower(state)
        }), []
    );

    const {power} = useMappedState(mapState);

    const color = colors[Object.keys(colors).find(min => power<=min)];


    return (
        <Stage width={280} height={50} onTouchStart={(e) => e.preventDefault()}>
            <Layer>
            <Text text="Power" fontSize={18} x={0} y={8} fill="white"/>
            <Rect
                    x={60}
                    y={5}
                    width={power*2}
                    height={20}
                    fill={color}
                    shadowBlur={4}
            />
            <Text text={power+"%"} fontSize={18} x={65} y={8} fill="black"/>

            </Layer>
        </Stage>
    )
}
