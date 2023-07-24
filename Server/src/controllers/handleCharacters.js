const axios = require('axios');
require('dotenv').config();
const {URL_API} = process.env;

function getCharById(req, res){
    try{
        const {id} = req.params;

        if(!id) return res.status(404).json({message: "Please send a valid ID"});
        axios(`${URL_API}${id}`).then(({data}) => {
            let {origin} = data;
            if(data) return res.status(200).json({id: data.id, status: data.status, name: data.name, 
                species: data.species, origin: origin.name, image: data.image, gender: data.gender});
            else return res.status(404).json('Character not found');

        }).catch((error) => res.status(500).json({message: error.message}));

    }catch(error){res.status(404).json({message: error.message})};
};

function getAllCharacters(req, res){
    try{
        axios(`${URL_API}`).then(({data}) => {
            if(data){
                const characters = data.results.map((character) => {

                    let {origin} = character;

                    return {
                        id: character.id,
                        status: character.status,
                        name: character.name,
                        species: character.species,
                        origin: origin.name,
                        image: character.image,
                        gender: character.gender
                    };
                });

                res.status(200).json(characters);
            }else res.status(500).json({message: "Characters not found"});
        })
    }catch(error){res.status(404).json({message: error.message})};
};

module.exports = {
    getCharById,
    getAllCharacters
};