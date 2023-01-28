const moongoose = require('mongoose')
const { hash, compare} = require('bcryptjs')


    const Schema = moongoose.Schema
    const projectSchema = new Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: Date,
            default: Data.now(), 
        },
        dataExpire: {
            type: data,
            required: true,
            trim: true
        },
        client: {
            type: String,
        },
        createBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        collaborators: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
        {
            timestamps: true
        }
    )


    module.exports = moongoose.model('Project', projectSchema)