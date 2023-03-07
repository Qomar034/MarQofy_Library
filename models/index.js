const pool = require('../config/connection')

class AuthorModel {
    // defining class
    static generateAuthor(id, fullName, gender) {
        return new Author(+id, fullName, gender)
    }
    static printAuthors(data) {
        return data.map(element => {
            let { Id, fullName, gender } = element
            return AuthorManager.generateAuthor(Id, fullName, gender)
        })
    }

    // Database Query
    static async callAuthors() {
        let callAuthorsQuery = `SELECT * FROM authors a ;`;
        
        let result = await pool
                        .query(callAuthorsQuery)
                        .then((res) => res.rows)
                        .catch((err) => {throw({message: 'Error executing query', error: err.stack})})

        return result
    }

    static async callAuthorDetails() {
        let callAuthorDetailsQuery = `
        SELECT b."authorId" AS "id", b."title", a."fullName" AS "author"
          FROM books b 
          JOIN authors a ON b."authorId" = a."Id"
          GROUP BY a."fullName", b."authorId", b."title"
          ORDER BY b."authorId" ASC ;
        `;

        let result = await pool
                        .query(callAuthorDetailsQuery)
                        .then((res) => res.rows)
                        .catch((err) => {throw({message: 'Error executing query', error: err.stack})})

        return result
    }
}

module.exports = {AuthorModel}