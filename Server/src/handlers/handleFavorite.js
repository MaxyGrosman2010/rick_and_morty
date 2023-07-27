const {addFavorite, allFavorites, findFavorite, 
    deleteFavorite} = require('../controllers/indexFavorite');

const postFav = async(req, res) => {
    try{
        const {id, status, name, species, origin, image, gender, userId} = req.body;
        if(!id || !name || !status || !species || !gender || !origin || !image) 
            return res.status(404).json({message: "The require information is missing"});
        const exist = await findFavorite(id, userId);
        if(!exist) return res.status(404).json({error: "Please send a character that isn't a favorite"});

        await addFavorite(id, status, name, species, origin, image, gender, userId);
        const response = await allFavorites(userId);

        return res.status(200).json(response);

    }catch(error) {res.status(404).json({message: error.message});};
};

const deleteFav = async(req, res) => {
    try{
        const {id, userId} = req.params;
        if(!id) return res.status(404).json({message: "There isn't an id here"});
        await deleteFavorite(id);
        const response = await allFavorites(userId);
        return res.status(200).json(response);
    }catch(error) {res.status(404).json({message: error.message});};
};

module.exports = {postFav, deleteFav};