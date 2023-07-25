const jwt = require('jsonwebtoken');
require('dotenv').config();
const {SECRET, EXPIRES_IN} = process.env

const createToken = (user) => {
    try{
        return jwt.sign({id: user.id, email: user.email, name: user.name}, 
            SECRET,
            {expiresIn: EXPIRES_IN});
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    };
};

const verifyToken = (req, res, next) => {
    try{
        let token = req.headers.authorization;
        token = token.split('Bearer').pop().trim();

        let confirmToken = jwt.verify(token, SECRET);
        req.id = confirmToken.id;
        req.email = confirmToken.email;
        req.name = confirmToken.name;

        next();
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    }
};

module.exports = {createToken, verifyToken};