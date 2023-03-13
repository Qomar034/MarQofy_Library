process.env.NODE_ENV !== 'production' ? require('dotenv').config() : null
const pass = process.env.DATABASE_PASSWORD

const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'db.exhfyydhczypvbeyyqsv.supabase.co',
    database: 'postgres',
    password: pass,
    port: 5432,
    idleTimeoutMillis: 100
})

module.exports = pool;