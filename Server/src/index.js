var http = require("http");
var characters = require("./utils/data.js");

const PORT = 3001;
const server = http.createServer((req, res) => {

    let id = parseInt(req.url.split('/').pop());

    res.setHeader('Access-Control-Allow-Origin', '*');

    switch(req.url){

        case "/rickandmorty/character":
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(characters));
            break;

        case `/rickandmorty/character/${id}`:
            res.writeHead(200, {'Content-Type': 'application/json'});
            let character = characters.find( (element) => element.id === id);
            res.end(JSON.stringify(character));
            break;

        default:
            break;
    };
}).listen(PORT, 'localhost');

module.exports = server;