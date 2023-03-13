const errorHandler = (err) => {
    let code = 500
    let message = "Internal Server Error"

    if (err.name = "InvalidLogin"){
        code = 401
        message = "Invalid Login Username/Password"
    }

    const errors = { code, message }
    return errors
}

module.exports = errorHandler