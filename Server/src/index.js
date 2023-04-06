var http = require("http");
var getCharacter = require('./controllers/getCharById');

const PORT = 3001;
const server = http.createServer((req, res) => {

    let id = parseInt(req.url.split('/').pop());
    res.setHeader('Access-Control-Allow-Origin', '*');
    switch(req.url){

        case `/rickandmorty/character/${id}`:
            getCharacter(res, id);
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/plain'}).end('Route not found');
            break;
    };
    return;
}).listen(PORT, console.log("in port http://localhost:3001"));

module.exports = server;