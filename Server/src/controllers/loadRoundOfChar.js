module.exports = (characters) => {
    let load = [];
    for(let element of characters) {
        let {origin} = element;
        let character = { id: element.id, status: element.status, 
            name: element.name, species: element.species, origin: origin.name, 
            image: element.image, gender: element.gender };
        load.push(character);
    };
    return load;
};