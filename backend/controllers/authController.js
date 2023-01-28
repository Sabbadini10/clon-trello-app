if([name,email,password].includes("")){
    throw createError(400,"Todos los campos son obligatorios!");

}
const createError = require('http-errors');


module.exports = (res, error, method) => {
    console.log(error);
    return res.status(error.status || 500).json({
        ok : false,
        msg : error.message || `Upss, hubo un error en ${method}`
    })
}
return errorResponse(res,error, "REGISTER")
const errorResponse = require('../helpers/errorResponse');

module.exports = {
    register: async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg: 'USUARIO REGISTRADO'
            })
        } catch (error) {
            console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'HUBO UN ERROR EN REGISTER'
        })
        }
    },
    login: async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg: 'USUARIO LOGUEADO'
            })
        } catch (error) {
            console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'HUBO UN ERROR LOGIN'
        })
        }
    },
checked: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'USUARIO CHECKEADO'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR CHECKED'
    })
    }
},
sendToken: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'TOKEN ENVIADO'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR EN SENDTOKEN'
    })
    }
},
verifyToken: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'TOKEN VERIFICADO'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR VERIFYTOKEN'
    })
    }
},
changePassword: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'PASSWORD CAMBIADO'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR EN CHANGEPASSWORD'
    })
    }
},
}

