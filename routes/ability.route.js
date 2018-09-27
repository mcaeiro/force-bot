const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const ability_controller = require('../controllers/ability.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', ability_controller.test);
module.exports = router;

router.post('/create', ability_controller.ability_create);
