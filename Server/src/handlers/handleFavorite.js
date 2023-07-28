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
        const {id} = req.params;
        if(!id) return res.status(404).json({message: "There isn't an id here"});
        await deleteFavorite(id);
        const response = await allFavorites(req.id);
        return res.status(200).json(response);
    }catch(error) {res.status(404).json({error: error});};
};

const getAllFavorites = async(req, res) => {
    try{
        let all = await allFavorites(req.id);
        let response = all.map((favorite) => {
            return {id: favorite.id, name: favorite.name, status: favorite.status, 
                species: favorite.species, gender: favorite.gender, 
                origin: favorite.origin, image: favorite.image}});
        return res.status(200).json(response);
    }catch(error){res.status(404).json({error: error})};
};

module.exports = {postFav, deleteFav, getAllFavorites};