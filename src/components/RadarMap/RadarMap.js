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
    left:800px;
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
        { name: rooms.CORRIDOR, shape: "poly", coords: [ 58,20,104,20,104,140,264,140,264,184,58,184],fillColor: "blue" },
        { name: rooms.DINING_ROOM, shape: "rect", coords: [ 116,20,264,130],fillColor: "blue" },
        { name: rooms.KITCHEN, shape: "rect", coords: [ 270,20,398,64],fillColor: "blue" },
        { name: rooms.TOILET, shape: "rect", coords: [ 272,70,334,228],fillColor: "blue" },
        { name: rooms.FUSION_COVE, shape: "rect", coords: [ 4,48,50,130],fillColor: "blue" },
        { name: rooms.LEFT_HALL, shape: "rect", coords: [ 58,190,112,316],fillColor: "blue" },
        { name: rooms.RIGHT_HALL, shape: "rect", coords: [ 212,188,266,312],fillColor: "blue" },
      ]
    }

    return (<RadarMap><ImageMapper onClick={(e) => playing && updateRadar(e)} src={map} width={400} map={MAP}/></RadarMap>)
}
