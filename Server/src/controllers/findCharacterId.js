const axios = require('axios');
require('dotenv').config();
const {URL_API} = process.env;

module.exports = (id) => axios(`${URL_API}${id}`);