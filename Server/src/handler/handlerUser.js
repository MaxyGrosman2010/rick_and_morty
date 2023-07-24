const {createUser, findUser} = require('../controllers/indexUser');

const signUp = async(req, res) => {
    try{
        const { email, password } = req.body;
        const exist = await findUser(email);
        
        if(exist) return res.status(422).json({error: "This user already exist"});

        const newUser = await createUser(email, password);

        return res.status(200).json(newUser);
    }catch(error){

        console.log(error);
        return res.status(500).json(error);
    };
};

const logIn = async(req, res) => {
    try{
        const exist = await findUser(req.email);
        
        if(!exist) return res.status(422).json({error: "This user doesn't exist"});

        return res.status(202).json();

    }catch(error){

        console.log(error);
        return res.status(500).json(error);
    };
};

module.exports = {signUp, logIn};