const {Favorite} = require('../DB_connection');

module.exports = (id, status, name, species, origin, image, gender, userId) => 
    Favorite.create({id, status, name, species, origin, image, gender, user_id: userId});