require('dotenv').config();
const bcrypt = require('bcrypt');
const {AUTH_ROUND} = process.env;

module.exports = async(password) => {
    try{
        const saltRounds = parseInt(AUTH_ROUND);
        const hash = await bcrypt.hash(password, saltRounds);
        
        return hash;

    }catch(error){ return error };
};