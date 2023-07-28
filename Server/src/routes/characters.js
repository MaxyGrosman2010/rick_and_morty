const express = require('express');
const router = express.Router();
const {getCharById, getCharactersPage, getCharacterName, 
    getCharacterGender, getSortedCharacters} = require('../handlers/handlerCharacter');
const verifyToken = require('../middleware/verifyToken');

router.get("/", verifyToken, getCharactersPage);
router.get("/name", verifyToken, getCharacterName);
router.get("/gender", verifyToken, getCharacterGender);
router.get("/sort", verifyToken, getSortedCharacters);
router.get("/:id", verifyToken, getCharById);


module.exports = router;