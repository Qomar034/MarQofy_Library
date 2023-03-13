const routes = require('express').Router()
const authorsRoutes = require('./authors')
const booksRoutes = require('./books')
const usersRoutes = require('./users')

routes.use('/authors', authorsRoutes)
// routes.use('/books', booksRoutes)
// routes.use('/users', usersRoutes)

module.exports = routes