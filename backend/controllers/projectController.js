module.exports = {
    list: async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg: 'LISTA PROJECT'
            })
        } catch (error) {
            console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'HUBO UN ERROR PROJECT LIST'
        })
        }
    },
    store: async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg: 'STORE PROJECT'
            })
        } catch (error) {
            console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'HUBO UN ERROR EN PROJECT STORE'
        })
        }
    },  
    detail: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'DETALLE PROJECT'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR EN PROJECT DETAIL'
    })
    }
},
    update: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'UPDATE PROJECT'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR UPDATE PROJECT'
    })
    }
},
    remove: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'REMOVE PROJECT'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR REMOVE PROJECT'
    })
    }
},
    addColaborator: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'ADD COLABORATOR PROJECT'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR ADD COLABORATOR'
    })
    }
},
removeColaborator: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'REMOVE COLABORATOR PROJECT'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR REMOVE COLABORATOR'
    })
    }
}
}