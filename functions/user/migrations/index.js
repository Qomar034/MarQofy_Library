const pool = require('./config')

let Password = require('./helpers/bcrypt')
let usersData = require('./data').map(el => {
    return `('${el.fullName}', '${el.username}', '${Password.hashPass(el.password)}', '${el.gender}')`
})

let migrateQuery = {
    dropTable: `DROP TABLE IF EXISTS "users";`,
    createTable: `        
    CREATE TABLE IF NOT EXISTS users(
        "Id" SERIAL PRIMARY KEY, 
        "fullName" VARCHAR(120) NOT NULL, 
        "username" VARCHAR(120) NOT NULL, 
        "password" VARCHAR(120) NOT NULL,
        "gender" VARCHAR(6) NOT NULL
        );`,
    seedTable: `
    INSERT INTO "users"("fullName", "username", "password", "gender")
    VALUES ${usersData}
    ;`
}

pool.query(migrateQuery.dropTable, (err, res) => {
    if (err) return console.log(err)
    console.log('Succesfully Delete Table If Exist');

    pool.query(migrateQuery.createTable, (err, res) => {
        if (err) return console.log(err)
        console.log('Succesfully Create Table Users');

        pool.query(migrateQuery.seedTable, (err, res) => {
            if (err) return console.log(err);
            console.log('Succesfully Seed Table Users');
        })
    })  
})