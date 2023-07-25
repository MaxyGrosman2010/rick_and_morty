const express = require('express');
const {postFav, deleteFav} = require('../controllers/handleFavorites');
const router = express.Router();

// router.post("/", postFav);
// router.delete("/:id", deleteFav);

module.exports = router;