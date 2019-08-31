export default ({characterLocations}, room) =>
    Object.keys(characterLocations.filter(location => (location === room)).toJSON());
