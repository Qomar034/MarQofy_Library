const bcrypt = require('bcrypt')

class Password {
    static hashPass (pass){
        return bcrypt.hashSync(pass, 8)
    }

    static compPass (pass, hashed){
        return bcrypt.compareSync(pass, hashed)
    }
}

module.exports = Password