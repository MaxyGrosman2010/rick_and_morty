const express = require('express');
const {logIn, signUp} = require('../handlers/handlerUser');

const router = express.Router();

router.get("/login", logIn);
router.post('/signup', signUp);

module.exports = router;