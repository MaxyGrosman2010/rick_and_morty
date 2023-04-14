var myFavorites = [];

function postFav(req, res){
    try{
        const {id, status, name, species, origin, image, gender} = req.body;

        if(!id || !name || !status || !species || !gender || !origin || !image) return res.status(404).json({message: "The require information is missing"});
        if(myFavorites.includes(Number(id))) return res.status(404).json({message: "This character is already belongs to your favorites"});

        myFavorites.push({id, name, status, species, gender, origin, image});
        return res.status(200).json(myFavorites);

    }catch(error) {res.status(404).json({message: error.message});};
};

function deleteFav(req, res){
    try{
        const {id} = req.params;

        if(!id) return res.status(404).json({message: "There isn't an id here"});

        myFavorites = myFavorites.filter(element => element.id !== Number(id));
        return res.status(200).json(myFavorites);

    }catch(error) {res.status(404).json({message: error.message});};
};

module.exports = {
    postFav,
    deleteFav
};