const pool = require('../db')

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN')
        const sql = `insert into users(name,surname,email,pwd)
values ($1,$2,$3,$4) returning *`
        const data = (await client.query(sql, [name, surname, email, pwd])).rows
        await client.query('COMMIT')
        return data
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`createUserDB:${error.message}`);
        return []
    }
}

async function getUserByEmail(email) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN')
        const sql = ` select * from users where email = $1`
        const result = (await client.query(sql,[email])).rows
        await client.query('COMMIT')
        return result 
    }catch(error){
        await client.query('ROLLBACK')
        console.log(`createUserDB:${error.message}`);
        return []
    }
}


module.exports = {getUserByEmail, createUserDB}