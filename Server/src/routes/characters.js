const express = require('express');
const router = express.Router();
const {getCharById, getAllCharacters} = require('../controllers/handleCharacters');

// router.get("/:id", getCharById);
// router.get("/", getAllCharacters);

module.exports = router;