const axios = require('axios');
require('dotenv').config();
const findCharacterById = require('../controllers/findCharacterId');
const findCharacterByName = require('../controllers/findCharacterByName');
const {URL_API} = process.env;

var charactersCache = [];
var cantPage = 0;

const allCharacters = async() => {
    try{
        let urlCheck = URL_API;

        while(urlCheck){
            let {data} = await axios(`${urlCheck}`);
            let {info} = data;
            urlCheck = info.next;

            for(let element of data.results) {
                let {origin} = element;
                let character = { id: element.id, status: element.status, 
                    name: element.name, species: element.species, origin: origin.name, 
                    image: element.image, gender: element.gender };
                    charactersCache.push(character);
            };
        };

        cantPage = Math.ceil(charactersCache.length / 6);
        console.log("Cache loaded");
        return charactersCache;
    }catch(error){console.log(error)};
};

const getCharById = async(req, res) => {
    try{
        const {id} = req.params;

        if(!id) return res.status(404).json({message: "Please send a valid ID"});

        let {data} = await findCharacterById(id);
        let {origin} = data;
        let response = {
            id: data?.id, status: data?.status, name: data?.name, species: data?.species, 
            origin: origin?.name, image: data?.image, gender: data?.gender
        };
        return res.status(200).json(response);
    }catch(error){res.status(404).json({message: error.message})};
};

const getCharactersPage = (req, res) => {
    const {page} = req.query;

    if(!page) return res.status(404).json({message: "Please send a correct page"});
    if(page > cantPage) return res.status(404).json({message: "Please send a correct page"});
    let from = page - 1;
    let response = charactersCache.slice(from * 6, page * 6);

    res.status(200).json(response);
};

const getCharacterName = async(req, res) => {
    const {name} = req.query;
    let {data} = await findCharacterByName(name);
    let {info} = data;
    let urlNext = info.next;

    for(let element of data.results){
        let {origin} = element;
        let character = { id: element.id, status: element.status, 
            name: element.name, species: element.species, origin: origin.name, 
            image: element.image, gender: element.gender };
        charactersCache.push(character);
    };

    while(urlNext){
        let {data} = await axios(`${urlNext}`);
        let {info} = data;
        urlNext = info.next;

        for(let element of data.results) {
            let {origin} = element;
            let character = { id: element.id, status: element.status, 
                name: element.name, species: element.species, origin: origin.name, 
                image: element.image, gender: element.gender };
            charactersCache.push(character);
        };
    };

    cantPage = Math.ceil(charactersCache.length / 6);
    let response = charactersCache.slice(0, 6);
    return res.status(200).json(response);
};

module.exports = {
    allCharacters,
    getCharById,
    getCharactersPage,
    getCharacterName
};