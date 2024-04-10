const path = require('path');

const CvsController = require('../api/controllers/CvsController')

const express = require('express');

const router = express.Router();

router.post('/game/new', null);

router.get('/game/:id', null);

router.get('/user/:id/stats', null);

router.post('/user/signin', null);

router.post('/user/signup', null);

module.exports = router;