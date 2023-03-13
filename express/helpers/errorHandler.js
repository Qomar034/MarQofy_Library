const errorHandler = (err, req, res, next) => {
    let statusCode = 500
    let message = "Internal Server Error"

    if (err.name = "InvalidLogin"){
        statusCode = 401
        message = "Invalid Login Username/Password"
    }
    
    const errors = { 
        statusCode,
        body: JSON.stringify({message})  
    }
    
    console.log(err)
    console.log(errors)
    
    res.status(statusCode).json({message})
}

module.exports = errorHandler