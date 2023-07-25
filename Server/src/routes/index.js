const express = require('express');
const favorites = require('./favorites');
const character = require('./characters');
const users = require('./users');

const router = express.Router();

router.use("/character", character);
router.use("/favorite", favorites);
router.use("/users", users);

module.exports = router;