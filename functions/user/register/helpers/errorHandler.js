const errorHandler = (err) => {
    let statusCode = 500
    let message = "Internal Server Error"

    if (err.name = "InvalidInput"){
        statusCode = 400
        message = err.message
    }
    
    const errors = { 
        statusCode,
        body: JSON.stringify({message})  
    }
    
    console.log(err)
    console.log(errors)
    
    return errors
}

module.exports = errorHandler