require('dotenv').config(); //Trae process --> .env --> variable que deseamos usar.
const server = require('./server');
const conn = require('./DB_connection');

const URL = "http://localhost:";
const PORT = 3001;


server.listen(PORT, () => {
    console.log(`Server raised in port ${URL}${PORT}`);
    conn.sync({force: true});
});

module.exports = server;