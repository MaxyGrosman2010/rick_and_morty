const server = require('./server');
require('dotenv').config(); //Trae process --> .env --> variable que deseamos usar.

const URL = "http://localhost:";
const PORT = 3001;


server.listen(PORT, () => {console.log(`Server raised in port ${URL}${PORT}`)});

module.exports = server;