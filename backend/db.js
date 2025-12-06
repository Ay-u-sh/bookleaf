const {Pool} = require('pg');

const pool = new Pool({
    user:'postgres',
    password:'123',
    host:'localhost',
    port:'5432',
    database:'appointmentbooking',
    connectionTimeoutMillis:30000,
    idleTimeoutMillis:30000,
    max:5
})

// pool.on('error',)

module.exports = pool;