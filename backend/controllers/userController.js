module.exports = {
    profile: async (req, res) => {
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
    }
}