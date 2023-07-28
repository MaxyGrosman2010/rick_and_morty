const {addFavorite, allFavorites, findFavorite, 
    deleteFavorite, linkFavoriteUser} = require('../controllers/indexFavorite');
const {findUser} = require('../controllers/indexUser');

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
        const {id, page} = req.query;
        if(!id) return res.status(404).json({message: "There isn't an id here"});
        await deleteFavorite(id);
        const all = await allFavorites(req.id);
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

module.exports = {postFav, deleteFav, getPageFavorites};