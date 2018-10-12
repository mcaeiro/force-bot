const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const ability_controller = require('../controllers/ability.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', ability_controller.test);

//Abilities CRUD
router.post('/create', ability_controller.ability_create);
router.get('/:id', ability_controller.ability_details);
router.put('/:id/update', ability_controller.ability_update);

module.exports = router;
