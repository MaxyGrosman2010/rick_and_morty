const express = require('express');
const favorites = require('../controllers/handleFavorites');
const router = express.Router();

router.post("/", favorites.postFav);
router.delete("/:id", favorites.deleteFav);

module.exports = router;