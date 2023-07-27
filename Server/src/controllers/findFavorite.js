const {Favorite} = require("../DB_connection");

module.exports = (id, userId) => Favorite.findOne({where: {id: id, user_id: userId}});