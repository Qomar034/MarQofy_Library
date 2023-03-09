const pool = require('./config')

class Author {
    constructor(id, fullName, gender) {
        this.id = id,
            this.fullName = fullName,
            this.gender = gender
    }
}

class AuthorModel {
    static generateAuthor(id, fullName, gender) {
        return new Author(+id, fullName, gender)
    }
    static printAuthors(data) {
        return data.map(element => {
            let { Id, fullName, gender } = element
            return AuthorModel.generateAuthor(Id, fullName, gender)
        })
    }

}

const funcQuery = `SELECT * FROM authors a ;`
export const handler = async() => {
    try {
        const result = await pool
            .query(funcQuery)
            .then((res) => res.rows)
            .catch((err) => { throw ({ message: 'Error executing query', error: err.stack }) })

        const response = {
            statusCode: 200,
            body: result,
        };
        return response; 
    } catch (error) {
        return error
    }
};