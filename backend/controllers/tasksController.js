module.exports = {
    list: async (req,res) => {
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
    store: async (req,res) => {
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
    detail: async (req,res) => {
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
    update: async (req,res) => {
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
    remove: async (req,res) => {
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
    changeState: async (req,res) => {
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
}
}