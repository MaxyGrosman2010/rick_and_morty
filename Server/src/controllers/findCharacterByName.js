const axios = require('axios');
require('dotenv').config();
const {URL_API} = process.env;

module.exports = (name) => axios(`${URL_API}?name=${name}`)