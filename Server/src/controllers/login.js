const users = require("../utils/users");

function login(req, res){
    try{
        const {email, password} = req.query;

        if(!email || !password) return res.status(500).json({message: "Invalid email or password"});
    
        let user = users.find(element => element.email === email && element.password === password);
        if(user) return res.status(200).json({access: true});
        else return res.status(200).json({access: false});
    }catch (error) {res.status(404).json({message: error.message});}
};

module.exports = login;