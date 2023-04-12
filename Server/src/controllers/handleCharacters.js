const axios = require('axios');
require('dotenv').config();

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res){
    try{
        const {id} = req.params;

        if(!id) return res.status(404).json({message: "Please send a valid ID"});
        axios(`${URL}${id}`).then(({data}) => {
            let {origin} = data;
            if(data) return res.status(200).json({id: data.id, status: data.status, name: data.name, 
                species: data.species, origin: origin.name, image: data.image, gender: data.gender});
            else return res.status(404).json('Character not found');
        
        }).catch((error) => res.status(500).json({message: error.message}));

    }catch(error){res.status(404).json({message: error.message})};
};

// function getAllCharacters(req, res){
//     try{
//         axios(`${URL}`).then(({data}) => {
//             if(data) return res.status(200).json(data.results);
//             else return res.status(504).json({message: "All the characters weren't send successfully"});
//         });
//     }catch(error){res.status(404).json({message: error.message})};
// };

module.exports = getCharById;