const express = require('express');
const {postFav, deleteFav, getPageFavorites} = require('../handlers/handleFavorite');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.post("/", verifyToken, postFav);
router.get("/page", verifyToken, getPageFavorites);
router.delete("/delete", verifyToken, deleteFav);


module.exports = router;