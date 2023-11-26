const express = require('express');
const {createUser} = require('../servise/user.servise')
const buildResponse = require('../helper/buildResponse');

const route = express.Router();

route.post('/reg', async(req,res)=>{
    try{
const {name,surname,email,pwd} = req.body
const data = await createUser(name,surname,email,pwd);
buildResponse(res,200, data)
    }catch(error){
buildResponse(res,404,error.message)
    }
})

module.exports = route