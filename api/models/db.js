const { Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'admin',
    database: 'bookmarkBinder',
    password: 'password',
    port: 5432,
    max: 50,
    idleTimeoutMillis: 30000,
})

module.exports = { pool };
