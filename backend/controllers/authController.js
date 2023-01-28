const errorResponse = require('../helpers/createError');
const createError = require('http-errors');



module.exports = {
    register: async (req,res) => {
        try {
            const {name,email,password} = req.body;

            if([name,email,password].includes("")){
                let error = new Error("Todos los campos son obligatorios");
                error.status = 400;
                throw error
            };

            return res.status(201).json({
                ok : true,
                msg :'Usuario Registrado'
            })
        } catch (error) {
            return errorResponse(res,error, "REGISTER")
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

