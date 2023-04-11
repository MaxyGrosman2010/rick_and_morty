const axios = require('axios');
const { error } = require('console');

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res){
    const {id} = req.params;

    axios(`${URL}${id}`).then(({data}) => {
        let character = {id: data.id, status: data.status, name: data.name, species: data.species,
        origin: data.origin, image: data.image, gender: data.gender};
        if(character) res.status(200).json(character);
        else res.status(404).json('Not found');
    }).catch((error) => res.status(500).json(error.message));
};

/* function getCharById(res, id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((({data}) => res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(data))))
        .catch((error) => res.writeHead({'Content-Type' : 'text/plain'}).end(error.message));

    const getAllCharacters = (res) => {
    axios('http://localhost:3001/rickandmorty/character').then(({data}) => 
        res.writeHead().end()
    ).catch()
};
}; */

module.exports = getCharById