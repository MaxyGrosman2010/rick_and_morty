const {User} = require('../DB_connection');

module.exports = (email) => User.findOne({ where: {email}});