const users = require("../utils/users");

function login(req, res){
    const {email, password} = req.query;

    if(!email || !password) return res.status(404).json({message: "Invalid email or password"});

    let user = users.find(element => element.email === email && element.password === password);
    if(user) res.status(200).json({access: true});
    else res.status(404).json({access: false});
};

module.exports = login;