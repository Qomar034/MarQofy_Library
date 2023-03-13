const routes = require('express').Router()
const controller = require('../controllers/authorController')

routes.get('/', controller.getAuthors)
routes.post('/', controller.postAuthor)

routes.get('/:authorId', controller.getAuthorById)
routes.put('/:authorId', controller.putAuthor)
routes.delete('/:authorId', controller.deleteAuthor)

module.exports = routes