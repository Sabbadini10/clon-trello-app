const Task = require("../database/models/Task")
const Project = require("../database/models/Project")

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
            const {name, description, priority, project : projectId} = req.body;
            if (
            [name, description, priority].includes("") ||
            !name ||
            !description ||
            !priority
            )
            throw createError(400, "Todos los campos son obligatorios");
           
            const project = await Project.findById(projectId);
            if (req.user._id.toString() !== project.createdBy.toString()) throw
           createError(403, "No estás autorizado");
            const taskStore = await Task.create(req.body);
            project.tasks.push(taskStore._id);
            await project.save();
            return res.status(201).json({
            ok : true,
            msg :'Tarea guardada con éxito',
            task : taskStore
            })
            } catch (error) {
            console.log(error);
            return errorResponse(res, error, "STORE-TASK");
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