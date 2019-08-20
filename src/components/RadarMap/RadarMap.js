import React, {useCallback} from 'react';
import {useDispatch, useMappedState} from 'redux-react-hook';
import {isPlaying} from '../../redux/selectors';
import map from './img/map.png'
import ImageMapper from 'react-image-mapper';
import * as actions from '../../redux/actions';
import rooms from '../../consts/rooms'
import styled from 'styled-components';

const RadarMap = styled.div`
    position:absolute;
    top:0px;
    left:600px;
    z-index:5;
`;

export default () => {
  const dispatch = useDispatch()
  const updateRadar = area => dispatch(actions.selectRoom(area.name))

  const mapState = useCallback(
    state => ({
      playing: isPlaying(state),
    }), []
  );

  const {playing} = useMappedState(mapState);

  const MAP = {
      name: "my-map",
      areas: [
        { name: rooms.CORRIDOR, shape: "poly", coords: [87,30,	156,	30,	156,	210,	396,	210,	396,	276,	87,	276],  fillColor: "blue"  },
        { name: rooms.DINING_ROOM, shape: "rect", coords: [174,	30,	396,	195],  fillColor: "blue"  },
        { name: rooms.KITCHEN, shape: "rect", coords: [405,	30,	597,	96],  fillColor: "blue"  },
        { name: rooms.TOILET, shape: "rect", coords: [408,	105,	501,	342],  fillColor: "blue"  },
        { name: rooms.FUSION_COVE, shape: "rect", coords: [6,	72,	75,	195], fillColor: "blue"  },
        { name: rooms.LEFT_HALL, shape: "rect", coords: [87,	285,	168,	474], fillColor: "blue"  },
        { name: rooms.RIGHT_HALL, shape: "rect", coords: [318,	282,	399,	468], fillColor: "blue"  }
      ]
    }

    return (<RadarMap><ImageMapper onClick={(e) => playing && updateRadar(e)} src={map} width={600} map={MAP}/></RadarMap>)
}
