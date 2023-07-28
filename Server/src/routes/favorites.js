const express = require('express');
const {postFav, deleteFav, getAllFavorites} = require('../handlers/handleFavorite');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.post("/", verifyToken, postFav);
router.get("/all", verifyToken, getAllFavorites);
router.delete("/:id", verifyToken, deleteFav);

module.exports = router;