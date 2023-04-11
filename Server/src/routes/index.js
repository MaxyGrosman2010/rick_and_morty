const {Router} = require('express');
const favorites = require('../controllers/handleFavorites');
const login = require('../controllers/login');
const characterID = require('../controllers/getCharById');

Router.get("/character/:id", characterID);
Router.get("/login", login);
Router.post("/fav", favorites.postFav);
Router.delete("/fav/:id", favorites.deleteFav);

module.exports = Router;