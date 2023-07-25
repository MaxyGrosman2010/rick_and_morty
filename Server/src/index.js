require('dotenv').config(); //Trae process --> .env --> variable que deseamos usar.
const server = require('./server');
const { conn } = require('./DB_connection');
const { PORT } = process.env;


server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`);
    conn.sync({force: true});
});

module.exports = server;