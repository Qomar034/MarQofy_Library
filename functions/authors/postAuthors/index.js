const pool = require('./config')

const handler = async(event) => {
    try {
        
        const { fullName, gender } = event.body;
        const funcQuery = `
            INSERT INTO authors("fullName", "gender")
            VALUES ('${fullName}','${gender}')
            ;`;
            
        const result = await pool
            .query(funcQuery)
            .then((res) => res.rows)
            .catch((err) => { throw ({ message: 'Error executing query', error: err.stack }) })

        const response = {
            statusCode: 201,
            body: JSON.stringify(result),
        };
        return response; 
    } catch (error) {
        return error
    }
};

handler({body : { fullName: "J.K Rowling", gender : "female" }})
module.exports = handler