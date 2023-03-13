const pool = require('./connection');
const Password = require('./helpers/bcrypt');
const inputValidator = require('./helpers/inputValidator');
const errorHandler = require('./helpers/errorHandler');

const handler = async(event) => {
    try {
        let { fullName, username, password, role, gender } = trial ;

        const validation = inputValidator({ fullName, username, password, role, gender })
        if (!validation.validated) throw ({ name: "InvalidInput", message: validation.message })

        if (!role) role = 'Client'
        password = Password.hashPass(password)

        const funcQuery = `
            INSERT INTO users("fullName", "username", "password", "role", "gender")
            VALUES ('${fullName}', '${username}', '${password}', '${role}', '${gender}')
            ;`;
            
        const result = await pool
            .query(funcQuery)
            .then((res) => res.rows)
            .catch((err) => { throw ({ message: 'Error executing query', error: err.stack }) })
            
        const response = {
            statusCode: 201,
            body: JSON.stringify({message : `Succesfully add user ${fullName} as ${username}`})
        };
        console.log(response)
        return response
    } catch (error) {
        return errorHandler(error)
    }
};

module.exports = { handler }