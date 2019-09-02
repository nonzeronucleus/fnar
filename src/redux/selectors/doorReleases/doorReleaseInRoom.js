import releaseButtons from '../../../consts/releaseButtons'
import _ from 'lodash';

export default ({ doorReleaseExpiryTimes }, door) => {
    const buttonsByRoom = _.invert(releaseButtons)
    const roomWithButton = buttonsByRoom[{releases: door}]

    // console.log(JSON.stringify(releaseButtons, null, 2));

    // console.log({door, roomWithButton})

    return roomWithButton ? false : null;
}


// !!doorReleaseExpiryTimes[door];
