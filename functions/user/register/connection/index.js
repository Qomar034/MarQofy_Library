process.env.NODE_ENV !== 'production' ? require('dotenv').config() : null

const pass = process.env.DATABASE_PASSWORD

const { Pool } = require('pg')

const pool = new Pool({
    host: "db.exhfyydhczypvbeyyqsv.supabase.co",
    user: "postgres",
    database: "postgres",
    password: pass,
    port: 5432,
    idleTimeoutMillis: 100
})

// pool.query(`SELECT NOW()`, (err, res) => {
//     console.log(err, res);
//     pool.end()
// })

module.exports = pool