const {User} = require('../DB_connection');

module.exports = (email, password) => User.create({email, password});