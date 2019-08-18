import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
import {getTime} from '../../redux/selectors';

export default () => {
    const mapState = useCallback(
        state => ({
          time: getTime(state)
        }), []
      );

      const {time} = useMappedState(mapState);

    return <div>Time - {time}</div>
}