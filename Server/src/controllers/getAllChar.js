var axios = require('axios');

const getAllCharacters = (res) => {
    axios('http://localhost:3001/rickandmorty/character').then(({data}) => 
        res.writeHead().end()
    ).catch()
};

module.exports = getAllCharacters;