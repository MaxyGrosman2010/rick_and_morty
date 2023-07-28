const {Favorite, User} = require("../DB_connection");

module.exports = (id) => Favorite.findOne({where: {id: id}});