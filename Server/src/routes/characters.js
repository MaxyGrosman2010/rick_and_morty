const express = require('express');
const router = express.Router();
const character = require('../controllers/handleCharacters');

router.get("/:id", character);

module.exports = router;