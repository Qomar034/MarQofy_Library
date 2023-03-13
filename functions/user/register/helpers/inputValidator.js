const inputValidator = (data) => {
    const { fullName, username, password, gender } = data

    if (!fullName) return { message: "User Full Name is required" }
    if (!username) return { message: "User Name is required" }
    if (!password) return { message: "User Password is required" }
    if (!gender) return { message: "User Gender is required" }

    return { validated : true }
}

module.exports = inputValidator