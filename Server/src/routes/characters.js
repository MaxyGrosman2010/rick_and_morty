const express = require('express');
const router = express.Router();
const {getCharById, getCharactersPage} = require('../handlers/handlerCharacter');

router.get("/:id", getCharById);
router.get("/", getCharactersPage);

module.exports = router;