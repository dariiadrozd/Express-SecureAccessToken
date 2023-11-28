const ExceptionType = require('../exception/exceptionUser')

function isValidUserData(req, res, next) {
    const { name, surname, email, pwd } = req.body;

    if (!name) throw new Error(ExceptionType.CHECKING_EMAIL);
    if (!surname) throw new Error(ExceptionType.CREATE_DATA_USER);

    if (!email) throw new Error(ExceptionType.CHECK_IF_THE_USER_EXIST);

    if (!pwd) throw new Error(ExceptionType.PASSWORD_MATCH);

    next();
}

module.exports = { isValidUserData }
