const mongoose = require('mongoose')
const { hash, compare} = require('bcryptjs')


    const Schema = mongoose.Schema
    const taskSchema = new Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: Date,
            default: Date.now(), 
        },
        dataExpire: {
            type: Date,
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



    module.exports = mongoose.model('Task', taskSchema)