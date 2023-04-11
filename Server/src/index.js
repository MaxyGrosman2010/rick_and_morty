const express = require('express');
const server = express();
var getCharById = require('./controllers/getCharById');
var getAllCharacters = require('./controllers/getAllChar');

const PORT = 3001;
const URL = `http://localhost:${PORT}`;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());

server.all("/*",(req, res, next) => {
    req.url = "/rickandmorty" + req.url;
    next();
})

server.listen(PORT, () => {console.log(`in port ${URL}`)});

/* const server = http.createServer((req, res) => {

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
}).listen(PORT, console.log(`in port ${URL}`)); */

module.exports = server;