const express = require('express');
const router = express.Router();
const {getCharById, getCharactersPage, getCharacterName, 
    getCharacterGender} = require('../handlers/handlerCharacter');
const verifyToken = require('../middleware/verifyToken');

router.get("/", getCharactersPage);
router.get("/name", getCharacterName);
router.get("/gender", getCharacterGender);
router.get("/:id", getCharById);


module.exports = router;