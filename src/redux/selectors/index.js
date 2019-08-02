import characters from '../../consts/characters';

export const getTime = ({time}) => time;

export const getCharacterLocations = ({locations}) => {
    return Object.values(characters).map(character => ({character:character, location:locations.get(character)}))
}

export const getSelectedRoom = ({selectedRoom}) => selectedRoom;
export const getCharactersInRoom = ({selectedRoom,locations}) => Object.keys(locations.filter(location => (location === selectedRoom)).toJSON());
