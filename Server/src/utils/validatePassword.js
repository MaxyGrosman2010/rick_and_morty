const bcrypt = require('bcrypt');

module.exports = (password, userPassword) => bcrypt.compare(password, userPassword);