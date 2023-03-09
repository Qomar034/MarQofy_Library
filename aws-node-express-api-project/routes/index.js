const Controller = require('../controllers')
const router = require('express').Router()

router.get('/', Controller.showBooks)
router.get('/authors', Controller.showAuthor)

module.exports = router;
