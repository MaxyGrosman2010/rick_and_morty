const axios = require('axios');


function getCharById(res, id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((({data}) => res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(data))))
        .catch((error) => res.writeHead({'Content-Type' : 'text/plain'}).end(error.message));
};

module.exports = getCharById