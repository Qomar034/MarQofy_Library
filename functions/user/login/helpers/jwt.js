process.env.NODE_ENV = 'production' ? require('dotenv').config() : null
const key = process.env.JWT_KEY

const jwt = require('jsonwebtoken')

class Token {
    static generate(payload){
        return jwt.sign(payload, key)
    }

    static verify(payload){
        return jwt.verify(payload, key)
    }
}

module.exports = Token