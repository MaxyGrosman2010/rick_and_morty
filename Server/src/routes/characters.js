const express = require('express');
const router = express.Router();
const character = require('../controllers/getCharById');

router.get("/:id", character);

module.exports = router;