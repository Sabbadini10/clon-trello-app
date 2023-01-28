module.exports = {
    profile: async (req, res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg: 'PERFIL USUARIO'
            })
        } catch (error) {
            console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'HUBO UN ERROR PERFIL USUARIO'
        })
        }
    }
}