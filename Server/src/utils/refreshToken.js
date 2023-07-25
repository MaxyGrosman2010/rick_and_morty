require('dotenv').config();
const jwt = require('jsonwebtoken');
const { SECRET, EXPIRES_IN} = process.env;

module.exports = (user) => {
    try{
        return jwt.sign({id: user.id, email: user.email, name: user.name}, 
            SECRET, {expiresIn: EXPIRES_IN});
    }catch(error){ console.log(error) };
};