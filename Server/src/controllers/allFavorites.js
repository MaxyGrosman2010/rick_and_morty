const {Favorite} = require('../DB_connection');

module.exports = (id) => Favorite.findAll({where: {user_id: id}});