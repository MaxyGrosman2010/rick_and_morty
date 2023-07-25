const {User} = require('../DB_connection');

module.exports = (email, name, password) => User.create({email, name, password});