var myFavorites = [];

function postFav(req, res){
    try{
        const {id, name, status, species, gender, origin, image} = req.body;

        if(!id || !name || !status || !species || !gender || !origin || !image) return res.status(404).json({message: "The require information is missing"});
        if(myFavorites.includes(id)) return res.status(404).json({message: "This character is already belongs to your favorites"});

        myFavorites.push({id, name, status, species, gender, origin, image});
        res.status(200).json(myFavorites);

    }catch(error) {res.status(404).json({message: error.message});};
};

function deleteFav(req, res){
    try{
        const {id} = req.params;

        if(!id) return res.status(404).json({message: "There isn't an id here"});

        myFavorites = myFavorites.filter(element => element.id !== id);
        res.status(200).json(myFavorites);

    }catch{res.status(404).json({message: error.message});};
};

module.exports = {
    postFav,
    deleteFav
}