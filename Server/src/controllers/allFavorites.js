const {Favorite, User} = require('../DB_connection');

module.exports = async(id) => await Favorite.findAll({include: [{ model: User, id: id}]});