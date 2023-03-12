const pool = require('./connection')
const Authentication = require('./security/authentication')
const errorHandler =  require('./helpers/errorHandler')

const handler = async(event) => {
    try {
        const { username, password } = JSON.parse(event.body)

        const findUserDdl = `SELECT * FROM users u WHERE u."username" = '${username}';`
        const calledUser = await pool
                                    .query(findUserDdl)
                                    .then((res) => res.rows[0])
                                    .catch((err) => { throw ({ message: 'Error executing query', error: err.stack }) })

        const user = await Authentication.login(calledUser, password)
        if (!user.authorized) throw ({name: "InvalidLogin"})

        const response = {
            statusCode: 200,
            body: JSON.stringify(user),
        };

        return response; 
    } catch (error) {
        const err = errorHandler(error)
        const response = {
            statusCode: err.code,
            body: JSON.stringify({message: err.message})
        }

        return response
    }
};
module.exports = { handler }