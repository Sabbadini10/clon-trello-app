module.exports = {
    list: async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg: 'TASK LIST'
            })
        } catch (error) {
            console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'HUBO UN ERROR TASK LIST'
        })
        }
    },
    store: async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg: 'TASK STORE'
            })
        } catch (error) {
            console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'HUBO UN ERROR TASK STORE'
        })
        }
    },  
    detail: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'TASK DETAIL'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR TASK DETAIL'
    })
    }
},
    update: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'TASK UPDATE'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR TASK UPDATE'
    })
    }
},
    remove: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'TASK REMOVE'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR TASK REMOVE'
    })
    }
},
    changeState: async (req,res) => {
    try {
        return res.status(201).json({
            ok : true,
            msg: 'TASK CHANGE STATE'
        })
    } catch (error) {
        console.log(error)
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'HUBO UN ERROR TASK CHANGE STATE'
    })
    }
}
}