const {Pool} = require('pg');

// const pool = new Pool({
//     user:'postgres',
//     password:'123',
//     host:'localhost',
//     port:'5432',
//     database:'appointmentbooking',
//     connectionTimeoutMillis:30000,
//     idleTimeoutMillis:30000,
//     max:5
// })

// pool.on('error',)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    connectionTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    max: 5
  });
module.exports = pool;