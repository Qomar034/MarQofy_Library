let pool = require("./connection")

let authorsData = require('../data').authors.map(el => {
    return `('${el.fullName}','${el.gender}')`
})

let booksData = require('../data').books.map(el => {
    return `('${el.title}','${el.authorId}')`
})

let listDdl = {
    insertAuthorsTable: `
        INSERT INTO authors("fullName", "gender")
        VALUES ${authorsData}
        ;`,
    insertBooksTableDdl: `
        INSERT INTO books("title", "authorId")
        VALUES ${booksData}
        ;`
} 
    
pool.query(listDdl.insertAuthorsTable, (err, result) => {
    if (err) return console.log(err);
    console.log(`Success Insert Authors Data`);
    
    pool.query(listDdl.insertBooksTableDdl, (err, result) => {
        if (err) return console.log(err);
        console.log(`Success Insert Books Data`);
    })
})