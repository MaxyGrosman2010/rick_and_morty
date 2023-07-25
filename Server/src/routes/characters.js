const express = require('express');
const router = express.Router();
const {getCharById, getCharactersPage} = require('../handlers/handlerCharacter');
const verifyToken = require('../middleware/verifyToken');

router.get("/:id", verifyToken, getCharById);
router.get("/", verifyToken, getCharactersPage);

module.exports = router;