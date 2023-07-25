const jwt = require('jsonwebtoken');
require('dotenv').config();
const {SECRET, EXPIRES_IN} = process.env

module.exports = (user) => {
    try{
        return jwt.sign({id: user.id, email: user.email, name: user.name}, 
            SECRET,
            {expiresIn: EXPIRES_IN});
    }catch(error){ return res.status(500).json(error) };
};