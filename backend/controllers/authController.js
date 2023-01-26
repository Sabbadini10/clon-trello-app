module.exports = {
    register: async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg: 'USUARIO LOGUEADO'
            })
        } catch (error) {
            console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'HUBO UN ERROR'
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
            msg: error.message || 'HUBO UN ERROR'
        })
        }
    },
checked: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'USUARIO LOGUEADO'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR'
    })
    }
},
sendToken: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'token enviado'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR'
    })
    }
},
verifyToken: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'token enviado'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR'
    })
    }
},
changePassword: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'token enviado'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR'
    })
    }
},
}

