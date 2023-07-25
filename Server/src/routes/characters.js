const express = require('express');
const router = express.Router();
const {getCharById, getCharactersPage, getCharacterName} = require('../handlers/handlerCharacter');
const verifyToken = require('../middleware/verifyToken');

router.get("/:id", verifyToken, getCharById);
router.get('/name',verifyToken, getCharacterName);
router.get("/", verifyToken, getCharactersPage);

module.exports = router;