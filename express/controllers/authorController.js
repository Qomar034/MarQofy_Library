const { Author } = require('../models')

class AuthorController {
    static async getAuthors (req, res, next){
        try {
            const calledAuthors = await Author.findAuthors()
            res.status(200).json(calledAuthors)
        } catch (error) {
            next(error)
        }
    }

    static async getAuthorById (req, res, next){
        try {
            const { authorId } = req.params
            const calledAuthors = await Author.findAuthorById({id: authorId})
            res.status(200).json(calledAuthors)
        } catch (error) {
            next(error)
        }
    }

    static async postAuthor (req, res, next){
        try {
            const { fullName, gender } = req.body
            await Author.createAuthors({ fullName, gender })

            res.status(201).json({message: `Succesfully add ${fullName} as ${gender} author`})
        } catch (error) {
            next(error)
        }
    }

    static async putAuthor (req, res, next){
        try {
            const { authorId } = req.params
            const { fullName, gender } = req.body
            const updatedAuthor = await Author.updateAuthors({ id: authorId, fullName, gender })

            res.status(200).json({message: `Succesfully update ${fullName} as ${gender} author`})
        } catch (error) {
            next(error)
        }
    }

    static async deleteAuthor (req, res, next){
        try {
            const { authorId } = req.params
            const deletedAuthor = await Author.destroyAuthors({id: authorId})
            
            res.status(200).json({message: `Succesfully delete author with id ${authorId}`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthorController