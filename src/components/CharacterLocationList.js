import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import {getCharacterLocations} from '../redux/selectors'

export default () => {
  const mapState = useCallback(
    state => ({
      characterLocations: getCharacterLocations(state),
    }), []
  );

  const {characterLocations} = useMappedState(mapState);
  // console.log(characterLocations);


  return (
    <>{JSON.stringify(characterLocations)}</>
  );
}

