const {Favorite} = require('../DB_connection');

module.exports = (id) => Favorite.destroy({where: {id: id}});