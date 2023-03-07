const { AuthorModel } = require('../models')

class Controller {
    static async showAuthor(req, res){
        try {
            let result = await AuthorModel.callAuthors()
            res.status(200).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Internal Server Error"})
        }
    }

    static async showBooks(req, res){
        try {
            let result = await AuthorModel.callAuthorDetails()
            res.status(200).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Internal Server Error"})
        }
    }
}

module.exports = Controller