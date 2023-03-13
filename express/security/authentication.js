const Password = require('../helpers/bcrypt')
const Token = require('../helpers/jwt')

class Authentication {
    static async login(user, pass){
        try {
            const authenticated = Password.compPass(pass, user.password)

            let access_token = null
            authenticated ? access_token = Token.generate({ id : user.Id, username: user.username }) : null

            return { authenticated, access_token }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports =  Authentication