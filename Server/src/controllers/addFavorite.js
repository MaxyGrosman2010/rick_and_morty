const {Favorite} = require('../DB_connection');

module.exports = (id, status, name, species, origin, image, gender) => 
    Favorite.create({id, status, name, species, origin, image, gender});