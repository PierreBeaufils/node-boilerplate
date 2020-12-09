const { Router } = require('express');
const router = Router();

const mainController = require('./controllers/mainController');


router.get('/', mainController.home);

module.exports = router;