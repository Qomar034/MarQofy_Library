const pool = require('../connection')

class Author {
    // Database Query
    static async findAuthors() {
        let callAuthorsQuery = `SELECT * FROM authors a ;`;
        
        let result = await pool
                        .query(callAuthorsQuery)
                        .then((res) => res.rows)
                        .catch((err) => {throw({message: 'Error executing query', error: err.stack})})

        return result
    }

    static async findAuthorById(data) {
        const { id } = data
        let callAuthorsQuery = `SELECT * FROM authors a WHERE a."Id" = '${id}';`;
        
        let result = await pool
                        .query(callAuthorsQuery)
                        .then((res) => res.rows)
                        .catch((err) => {throw({message: 'Error executing query', error: err.stack})})

        return result
    }

    static async createAuthors(data) {
        const { fullName, gender } = data

        let callAuthorsQuery = `
        INSERT INTO authors("fullName", "gender")
            VALUES ('${fullName}','${gender}')
        ;`;
        
        let result = await pool
                        .query(callAuthorsQuery)
                        .then((res) => res.rows)
                        .catch((err) => {throw({message: 'Error executing query', error: err.stack})})

        return result
    }

    static async updateAuthors(data) {
        const { id, fullName, gender } = data
        
        let callAuthorsQuery = `
        UPDATE "authors" 
            SET 
                "fullName" = '${fullName}', 
                "gender" = '${gender}'
            WHERE "Id" = '${id}'
        ;`;
        
        let result = await pool
                        .query(callAuthorsQuery)
                        .then((res) => res.rows)
                        .catch((err) => {throw({message: 'Error executing query', error: err.stack})})

        return result
    }

    static async destroyAuthors(data) {
        const { id } = data
        
        let callAuthorsQuery = `DELETE FROM authors a WHERE a."Id" = '${id}';`
        
        let result = await pool
                        .query(callAuthorsQuery)
                        .then((res) => res.rows)
                        .catch((err) => {throw({message: 'Error executing query', error: err.stack})})

        return result
    }
}

module.exports = Author