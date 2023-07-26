const express = require('express');
const router = express.Router();
const {getCharById, getCharactersPage, getCharacterName} = require('../handlers/handlerCharacter');
const verifyToken = require('../middleware/verifyToken');

router.get("/:id", getCharById);
router.get('/', getCharacterName);
router.get("/", getCharactersPage);

//verifyToken,

module.exports = router;