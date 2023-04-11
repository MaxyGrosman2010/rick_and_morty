const users = require("..utils/users");

module.exports = function login(req, res){
    const {email, password} = req.query;

    let user = users.find(element => element.email === email && element.password === password);
    if(user) res.status(200).json({access: true});
    else res.status(200).json({access: false});
};