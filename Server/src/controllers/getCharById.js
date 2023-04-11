const axios = require('axios');
require('dotenv').config();

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res){
    const {id} = req.params;

    axios(`${URL}${id}`).then(({data}) => {

        if(data) res.status(200).json({id: data.id, status: data.status, name: data.name, species: data.species,
            origin: data.origin?.name, image: data.image, gender: data.gender});
        else res.status(404).json('Character not found');
        
    }).catch((error) => res.status(500).json({message: error.message}));
};

/*  const getAllCharacters = (res) => {
        axios('http://localhost:3001/rickandmorty/character').then(({data}) => 
            res.writeHead().end()
        ).catch()
}; */

module.exports = getCharById