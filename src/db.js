const {config} = require('dotenv');
const {Pool} = require('pg')
config()


const {PASSWORD, DATABASE, DB_PORT, DB_HOST,DB_USER} = process.env

const pool = new Pool({
    password:PASSWORD,
    database: DATABASE,
    port:DB_PORT,
    host:DB_HOST,
    user:DB_USER
})

module.exports = pool

