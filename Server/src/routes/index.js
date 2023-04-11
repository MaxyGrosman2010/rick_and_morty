const express = require('express');
const favorites = require('./favorites');
const character = require('./characters');
const login = require('./users');

const router = express.Router();

router.use("/character", character);
router.use("/favorites", favorites);
router.use("/", login);

module.exports = router;