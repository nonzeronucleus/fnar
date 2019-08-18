import React from 'react';
import {useDispatch} from 'redux-react-hook';
import map from './img/map.png'
import ImageMapper from 'react-image-mapper';
import * as actions from '../../redux/actions';
import rooms from '../../consts/rooms'


const moveOnArea = (evt) => {
//   const {x,y} = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY }
//   // console.log({x,y})
}

// const clicked =area => console.log(area.name)


export default () => {
  const dispatch = useDispatch()

  const updateRadar = area => dispatch(actions.selectRoom(area.name))

    const MAP = {
        name: "my-map",
        areas: [
          { name: rooms.CORRIDOR, shape: "poly", coords: [29,10,52,10,52,70,132,70,132,92, 29,92],  fillColor: "blue"  },
          { name: rooms.DINING_ROOM, shape: "rect", coords: [58,10,132,65],  fillColor: "blue"  },
          { name: rooms.KITCHEN, shape: "rect", coords: [135,10,199,32],  fillColor: "blue"  },
          { name: rooms.TOILET, shape: "rect", coords: [136,35,167,114],  fillColor: "blue"  },
          { name: rooms.FUSION_COVE, shape: "rect", coords: [2,24,25,65], fillColor: "blue"  },
          { name: rooms.LEFT_HALL, shape: "rect", coords: [29,95,56,158], fillColor: "blue"  },
          { name: rooms.RIGHT_HALL, shape: "rect", coords: [106,94,133,156], fillColor: "blue"  },
          { name: rooms.OFFICE, shape: "rect", coords: [59,120,103,166], fillColor: "blue"  },
        ]
      }


    return (<ImageMapper onClick={updateRadar} onImageMouseMove={evt => moveOnArea(evt)} src={map} width={200} map={MAP}/>)
}
