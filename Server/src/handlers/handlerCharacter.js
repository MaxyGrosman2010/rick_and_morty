const axios = require('axios');
require('dotenv').config();
const {findCharacterById, findCharacterByName, loadRoundOfChar, 
    findUser} = require('../controllers/indexCharacter');
const {addFavorite, allFavorites, findFavorite, deleteFavorite, 
    linkFavoriteUser} = require('../controllers/indexFavorite');
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
        showCharacters = charactersCache;
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
        let response = {characters: showCharacters.slice(from * 6, page * 6), cantPage};
        res.status(200).json(response);
    }catch(error){ res.status(500).json(error)};
};

const getCharacterName = async(req, res) => {
    try{
        const {name} = req.query;

        if(name === '') {
            showCharacters = charactersCache;
        }else{
            let {data} = await findCharacterByName(name);
            let {info} = data;
            let urlNext = info.next;
            let load = loadRoundOfChar(data.results);
            showCharacters = [...load];
            while(urlNext){
                let {data} = await axios(`${urlNext}`);
                let {info} = data;
                urlNext = info.next;
                let load = loadRoundOfChar(data.results);
                showCharacters = [...showCharacters, ...load];
            };
        };

        cantPage = Math.ceil(showCharacters.length / 6);
        let response = {characters: showCharacters.slice(0, 6), cantPage};
        return res.status(200).json(response);
    }catch(error){res.status(500).json(error)};
};

const getCharacterGender = (req, res) => {
    try{
        const {gender} = req.query;
        if(!gender) return res.status(404).json({error: "Please send a gender"});
        showCharacters = charactersCache.filter((character) => character.gender === gender);
        cantPage = Math.ceil(showCharacters.length / 6);
        let response = {characters: showCharacters.slice(0, 6), cantPage};
        return res.status(200).json(response);
    }catch(error){res.status(500).json(error)};
};

const getSortedCharacters = (req, res) => {
    try{
        const {sort} = req.query;
        sort === "A" ? showCharacters.sort((a,b) => a.name.localeCompare(b.name)) : 
        showCharacters.sort((a,b) => b.name.localeCompare(a.name));
        let response = {characters: showCharacters.slice(0, 6)};
        return res.status(200).json(response);
    }catch(error){return res.status(500).json(error)};
};

const cleanShow = (req, res) => {
    showCharacters = [];
    return res.status(200).json({message: "The show list is clean"})
};

const postFav = async(req, res) => {
    try{
        const {id, status, name, species, origin, image, gender} = req.body;
        if(!id || !name || !status || !species || !gender || !origin || !image) 
            return res.status(404).json({message: "The require information is missing"});
        const exist = await findFavorite(id);
        if(exist) return res.status(404).json({error: "Please send a character that isn't a favorite"});
        await addFavorite(id, status, name, species, origin, image, gender);
        let user = await findUser(req.email);
        let favorite = await findFavorite(id);
        await linkFavoriteUser(user, favorite);
        return res.status(200).json({message: "It was added to favorites"});
    }catch(error) {res.status(404).json({message: error.message});};
};

const deleteFav = async(req, res) => {
    try{
        const {id} = req.query;
        if(!id) return res.status(404).json({message: "There isn't an id here"});
        await deleteFavorite(id);
        const all = await allFavorites(req.id);
        console.log(all);
        return res.status(200).json("The character was remove from favorites");
    }catch(error) {res.status(404).json({error: error});};
};

const getPageFavorites = async(req, res) => {
    try{
        let {page} = req.query;
        let all = await allFavorites(req.id);
        let characters = all.map((favorite) => {
            return {id: favorite.id, name: favorite.name, status: favorite.status, 
                species: favorite.species, gender: favorite.gender, 
                origin: favorite.origin, image: favorite.image}});
        let cantPage = Math.ceil(characters.length / 6);
        let from = page - 1;
        let response = {
            characters: characters.slice(from * 6, page * 6),
            cantPage
        };
        return res.status(200).json(response);
    }catch(error){res.status(404).json({error: error})};
};

module.exports = {allCharacters, getCharById, getCharactersPage, getCharacterName,
    getCharacterGender, getSortedCharacters, cleanShow, postFav, deleteFav, getPageFavorites};