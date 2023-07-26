const express = require('express');
const router = express.Router();
const {getCharById, getCharactersPage, getCharacterName} = require('../handlers/handlerCharacter');
const verifyToken = require('../middleware/verifyToken');

router.get("/:id", getCharById);
router.get('/name', getCharacterName);
router.get("/", getCharactersPage);

module.exports = router;