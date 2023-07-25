const jwt = require('jsonwebtoken');
require('dotenv').config();
const {SECRET} = process.env

module.exports = (req, res, next) => {
    try{
        let token = req.headers.authorization;
        token = token.split('Bearer').pop().trim();

        let confirmToken = jwt.verify(token, SECRET);
        req.id = confirmToken.id;
        req.email = confirmToken.email;
        req.name = confirmToken.name;

        next();
    }catch(error){ return res.status(500).json(error) };
};