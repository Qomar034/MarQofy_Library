let pool = require('./connection') 

let listDdl = {
    dropAuthorsTable : `DROP TABLE IF EXISTS "authors";`,
    dropBooksTable : `DROP TABLE IF EXISTS "books";`,
    createAuthorTable : `
        CREATE TABLE IF NOT EXISTS authors(
            "Id" SERIAL PRIMARY KEY, 
            "fullName" VARCHAR(120) NOT NULL, 
            "gender" VARCHAR(6) NOT NULL)
            ;`,
    createBooksTable : `
        CREATE TABLE IF NOT EXISTS books(
            "Id" SERIAL PRIMARY KEY,
            "title" VARCHAR(100),
            "authorId" INTEGER REFERENCES authors("Id"))
            ;`,
}

pool.query(listDdl.dropBooksTable, (err, result) => {

    if (err) return console.log(err);
    pool.query(listDdl.dropAuthorsTable, (err, result) => {

        if (err) return console.log(err);
        pool.query(listDdl.createAuthorTable, (err, result) => {
            
            if (err) return console.log(err);
            console.log(`Succes Create Author Table`);
            pool.query(listDdl.createBooksTable, (err, result) => {
            
                if (err) return console.log(err);
                console.log(`Succes Create Books Table`);
            })
        })
    })
})
