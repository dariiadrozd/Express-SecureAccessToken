const { createUserDB, getUserByEmail } = require('../repository/user.repository')
const bcrypt = require('bcrypt')
const salt = 10

async function createUser(name, surname, email, pwd) {
    const user = await getUserByEmail(email)
    if (user.length) throw new Error('user already exsist')

    const hashPWD = await bcrypt.hash(pwd, salt)

    const data = await createUserDB(name, surname, email, hashPWD)
    if (!data.length) throw new Error('not create')
    return data
}

module.exports = { createUser }