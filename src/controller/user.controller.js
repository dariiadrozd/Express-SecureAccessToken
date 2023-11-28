const express = require('express');
const { createUser, authUser } = require('../servise/user.servise')
const { buildResponse } = require('../helper/buildResponse');
const { isValidUserData } = require('../helper/userValidation')

const route = express.Router();

route.post('/reg', isValidUserData, async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = await createUser(name, surname, email, pwd);
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

route.post('/auth', isValidUserData, async (req, res) => {
    try {
        const { email, pwd } = req.body
        const data = await authUser(email, pwd)
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

module.exports = route