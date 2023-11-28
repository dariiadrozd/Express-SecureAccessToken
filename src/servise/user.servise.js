const bcrypt = require('bcrypt')

const { createUserDB, getUserByEmail } = require('../repository/user.repository')
const ExceptionType = require('../exception/exceptionUser')
const salt = 10

async function createUser(name, surname, email, pwd) {
    const user = await getUserByEmail(email)
    if (user.length) throw new Error(ExceptionType.CREATE_DATA_USER)

    const hashPWD = await bcrypt.hash(pwd, salt)

    const data = await createUserDB(name, surname, email, hashPWD)
    if (!data.length) throw new Error(ExceptionType.CHECK_IF_THE_USER_EXIST)
    return data
}

async function authUser(email, pwd) {
    const user = await getUserByEmail(email)
    if (!user.length) throw new Error(ExceptionType.CHECKING_EMAIL)
    const pwdUserHash = user[0].pwd
    if (!(await bcrypt.compare(pwd, pwdUserHash))) throw new Error(ExceptionType.PASSWORD_MATCH)
    return user
}


module.exports = { createUser, authUser }