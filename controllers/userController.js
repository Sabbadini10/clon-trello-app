const createError = require("http-errors");
const User = require("../database/models/User");
const errorResponse = require("../helpers/errorResponse");
const ObjetcId = require("mongoose").Types.ObjectId

module.exports = {
    profile : async(req,res) => {
        try {
            if (!req.user) throw createError(401, "No se encuentra un usuario")

            const user = await User.findOne(req.user).select("name email")

            if (!user) throw createError(404,"Usuario no encontrado");

            return res.status(200).json({
                ok : true,
                msg :'Perfil de Usuario',
                user
            })
        } catch (error) {
            return errorResponse(res, error, "PERFIL")
        }
    },
    update: async (req, res) => {
        try {
            const {id} = req.params;
            if(!ObjetcId.isValid(id)) throw createError(404,"No es un ID valido");

            const user = await User.findById(id)
            if (!user) throw createError(404,"Usuario no encontrado");

            const {name, email} = req.body;

            let userEmail = await User.findOne({ email });
            if (userEmail) throw createError(400, "El email ya esta registrado");

            user.name = name || user.name;
            user.email = email || user.email;

            await user.save()

            return res.status(200).json({
                ok : true,
                msg :'Usuario actualizado',
                user: user
            })
        } catch (error) {
            return errorResponse(res, error, "update")
        }
    },
    remove: async (req, res) => {
        try {
            const {id} = req.params;
            if(!ObjetcId.isValid(id)) throw createError(404,"No es un ID valido");

            const user = await User.findById(id)
            if (!user) throw createError(404,"Usuario no encontrado");

            if (req.user._id.toString() !== user._id.toString()) throw createError(401,"No estas autorizade");

            await user.deleteOne()

            return res.status(200).json({
                ok : true,
                msg :'Usuario eliminado'
            })
        } catch (error) {
            return errorResponse(res, error, "remove")
        }
    }
}