const createError = require('http-errors');
const { verify } = require('jsonwebtoken');




module.exports = (req, res, next)=> {try {

    if(!req.headers.authorization){
        throw createError(401,"Se requiere un token");
    }

    const token = req.headers.authorization;
    const decoded = verify(token, process.env.JWT_SECRET)

    next()
    
} catch (error) {
    if(error.message == "jwt expired"){
        error.status = 403,
            msg = "El token ha expirado"
    } else if(error.message == "invalid signature"){
        error.status = 403,
        msg = "El token no es válido"
    } else {
        msg = error.message;
    }
    

}}