const Password = require('../helpers/bcrypt')
const Token = require('../helpers/jwt')

class Authentication {
    static async login(user, pass){
        try {
            const authorized = Password.compPass(pass, user.password)

            let access_token = null
            authorized ? access_token = Token.generate({ id : user.Id, username: user.username }) : null

            return { authorized, access_token }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports =  Authentication