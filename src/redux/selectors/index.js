import characters from '../characters';
// import building from './building';

export const getTime = ({time}) => time;


export const getCharacterLocations = ({locations}) => {
    return Object.keys(characters).map(charId => ({character:charId, location:locations.get(charId)}))
}

///locations.map(location => ({character:characters.}))



//{console.log("xxx", {locations}); return locations};
