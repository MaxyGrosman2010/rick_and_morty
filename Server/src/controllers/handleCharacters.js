const axios = require('axios');
require('dotenv').config();

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res){
    const {id} = req.params;

    if(!id) return res.status(404).json({message: "Please send a valid ID"});
    axios(`${URL}${id}`).then(({data}) => {

        if(data) res.status(200).json({id: data.id, status: data.status, name: data.name, species: data.species,
            origin: data.origin, image: data.image, gender: data.gender});
        else res.status(404).json('Character not found');
        
    }).catch((error) => res.status(500).json({message: error.message}));
};

/* function getAllCharacters(res){
        axios(`${URL}`).then(({data}) => 
            res.status(200).json()
        ).catch()
}; */

module.exports = getCharById;