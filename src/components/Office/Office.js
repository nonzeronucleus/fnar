import React, { useEffect, useMemo, useRef } from 'react';
import scene from './img/office.png';
import openDoor from './img/door-open.jpg';
import HiddenImage from '../HiddenImage';

export const Door = ({id, left, top}) => {
    // const [open, setOpen] = useState([]);
    console.log('door')
    return <HiddenImage {...{id, left, top}} src={openDoor} role="presentation" alt=""/>
}

const isClickInObject = ({x,y}) => ({left, top, width, height}) =>
    left <= x &&
    left + width >= x &&
    top <= y &&
    top + height >= y

const objectClickable = ({props}) => props.clickable;

const TrackableCanvas = ({width, height, children}) => {

    const objects = useRef([]);

    const updateObjects = () => {
        objects.current = children
            .filter(objectClickable)
            .map (child =>  {
                const {id} = child.props;
                const {width, height} = document.getElementById(id);
                const {left = 0, top = 0} = child.props;

                return {
                    id,
                    width, height,
                    left, top,
                }
            })
    }

    const onClick = (e) => {
        const checkClick = isClickInObject({x: e.clientX, y:e.clientY})

        const clickedObjects = objects.current
            .filter(checkClick)
            .map(object => object.id)

        console.log(clickedObjects)
    }

    const paint = () => {
        const context = canvasRef.current.getContext("2d");
        context.save();
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        children.forEach (child =>  {
            const elem = document.getElementById(child.props.id);
            console.log({elem})
            if (!elem) return;
            const {left = 0, top = 0} = child.props;
            context.drawImage(elem,left,top);
        });

        context.restore();
    }


    const refresh = () => {
        paint();
        updateObjects();
    }

    useEffect(() => {
        refresh();
    })

    const onLoad = () => {
        refresh();
    }



    const canvasRef = React.useRef(null);

    return <canvas ref={canvasRef} {...{width, height}} onClick={onClick} >
        {children.map ((child, i) => {
            return React.cloneElement(child, {key:i, onLoad: onLoad})
        })}
    </canvas>
}



export default () => {

    return useMemo(() => (
        <TrackableCanvas
            width={1600}
            height={768}
        >
            <HiddenImage src={scene} role="presentation" alt="" id="room" />
            <Door id="door" left={0} top={300} clickable = {true}/>

        </TrackableCanvas>
    ), []);
}
