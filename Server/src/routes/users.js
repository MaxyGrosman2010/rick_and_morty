const express = require('express');
const {logIn, signUp} = require('../handler/handlerUser');

const router = express.Router();

router.get("/login", logIn);
router.post('/signup', signUp);

module.exports = router;