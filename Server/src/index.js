var http = require("http");
var getCharById = require('./controllers/getCharById');
var getAllCharacters = require('./controllers/getAllChar');

const PORT = 3001;
const URL = 'http://localhost:3001';

const server = http.createServer((req, res) => {

    let id = parseInt(req.url.split('/').pop());
    res.setHeader('Access-Control-Allow-Origin', '*');
    switch(req.url){

        case 'rickandmorty/characters':
            getAllCharacters(res);
            break;

        case `/rickandmorty/character/${id}`:
            getCharById(res, id);
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/plain'}).end('Route not found');
            break;
    };
    return;
}).listen(PORT, console.log(`in port ${URL}`));

module.exports = server;