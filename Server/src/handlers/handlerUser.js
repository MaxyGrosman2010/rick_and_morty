const {createUser, findUser} = require('../controllers/indexUser');
const hashPassword = require('../utils/hashPassword');
const validatePassword = require('../utils/validatePassword');
const createToken = require('../utils/createToken');

const signUp = async(req, res) => {
    try{
        const { email, name, password } = req.body;
        const exist = await findUser(email);
        if(exist) return res.status(422).json({error: "This user already exist"});

        const hashed = await hashPassword(password);
        await createUser(email, name, hashed);
        return res.status(200).json({message: "User created with success"});
    }catch(error){ return res.status(500).json(error) };
};

const logIn = async(req, res) => {
    try{
        const {email, password} = req.body;
        const exist = await findUser(email);
        if(!exist) return res.status(422).json({error: "This user doesn't exist"});

        const valid = await validatePassword(password, exist.password);
        if(!valid) return res.status(422).json({error: "This credential isn't valid"});

        const token = await createToken(exist);
        res.cookie('token', token);
        return res.status(202).json({name: exist.name});
    }catch(error){ return res.status(500).json(error) };
};

module.exports = {signUp, logIn};