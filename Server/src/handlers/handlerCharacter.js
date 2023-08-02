const axios = require('axios');
require('dotenv').config();
const {findCharacterById, findCharacterByName, 
    loadRoundOfChar} = require('../controllers/indexCharacter');
const {URL_API} = process.env;
var charactersCache = [];
var showCharacters = [];
var cantPage = 0;

const allCharacters = async() => {
    try{
        let urlCheck = URL_API;
        while(urlCheck){
            let {data} = await axios(`${urlCheck}`);
            let {info} = data;
            urlCheck = info.next;
            let load = loadRoundOfChar(data.results);
            charactersCache = [...charactersCache, ...load];
        };
        cantPage = Math.ceil(charactersCache.length / 6);
        console.log('cache loaded', cantPage);
        return charactersCache;
    }catch(error){console.log(error)};
};

const getCharById = async(req, res) => {
    try{
        const {id} = req.params;
        if(!id) return res.status(404).json({message: "Please send a valid ID"});
        let {data} = await findCharacterById(id);
        let {origin} = data;
        let response = {id: data?.id, status: data?.status, name: data?.name, 
            species: data?.species, origin: origin?.name, image: data?.image, 
            gender: data?.gender};
        return res.status(200).json(response);
    }catch(error){res.status(404).json({message: error.message})};
};

const getCharactersPage = (req, res) => {
    try{
        const {page} = req.query;
        if(!page) return res.status(404).json({message: "Please send a correct page"});
        if(page <= 0) return res.status(404).json({message: "This page doesn't exist"});
        if(page > cantPage) return res.status(404).json({message: "This page doesn't exist"});
        let from = page - 1;
        let response = {characters: charactersCache.slice(from * 6, page * 6), cantPage};
        res.status(200).json(response);
    }catch(error){ res.status(500).json(error)};
};

const getCharacterName = async(req, res) => {
    try{
        const {name} = req.query;
        let {data} = await findCharacterByName(name);
        let {info} = data;
        let urlNext = info.next;
        let load = loadRoundOfChar(data.results);
        charactersCache = [...load];
        while(urlNext){
            let {data} = await axios(`${urlNext}`);
            let {info} = data;
            urlNext = info.next;
            let load = loadRoundOfChar(data.results);
            charactersCache = [...charactersCache, ...load];
        };
        cantPage = Math.ceil(charactersCache.length / 6);
        let response = {characters: charactersCache.slice(0, 6), cantPage};
        return res.status(200).json(response);
    }catch(error){res.status(500).json(error)};
};

const getCharacterGender = async(req, res) => {
    try{
        const {gender} = req.query;
        if(!gender) return res.status(404).json({error: "Please send a gender"});
        if(charactersCache.filter((character) => character.gender === gender).length === 0){
            let {data} = await findCharacterByName(" ");
            let {info} = data;
            let urlNext = info.next;
            console.log(2);
            let load = loadRoundOfChar(data.results);
            charactersCache = [...load];
            while(urlNext){
                let {data} = await axios(`${urlNext}`);
                let {info} = data;
                urlNext = info.next;
                let load = loadRoundOfChar(data.results);
                charactersCache = [...charactersCache, ...load];
            };
            cantPage = Math.ceil(charactersCache.length / 6);
        };
        charactersCache = charactersCache.filter((character) => character.gender === gender);
        cantPage = Math.ceil(charactersCache.length / 6);
        let response = {characters: charactersCache.slice(0, 6), cantPage};
        return res.status(200).json(response);
    }catch(error){res.status(500).json(error)};
};

const getSortedCharacters = async(req, res) => {
    try{
        const {sort} = req.query;
        !sort ? charactersCache.sort((a,b) => a.id - b.id) : sort === "A" ? 
        charactersCache.sort((a,b) => a.name.localeCompare(b.name)) : 
        charactersCache.sort((a,b) => b.name.localeCompare(a.name));

        let response = {characters: charactersCache.slice(0, 6)};
        return res.status(200).json(response);
    }catch(error){return res.status(500).json(error)};
};

module.exports = {allCharacters, getCharById, getCharactersPage, getCharacterName,
    getCharacterGender, getSortedCharacters};