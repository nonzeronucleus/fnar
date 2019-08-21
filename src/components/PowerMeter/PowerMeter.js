import React, {useCallback}  from 'react';
import {useMappedState} from 'redux-react-hook';
// import styled from 'styled-components';
import {getPower} from '../../redux/selectors';





export default () => {
    const mapState = useCallback(
        state => ({
          power: getPower(state)
        }), []
    );

    const {power} = useMappedState(mapState);

    return (
        <div>
        {power}
        </div>
    )
}
