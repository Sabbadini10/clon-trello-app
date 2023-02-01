const moongoose = require('mongoose')
const { hash, compare} = require('bcryptjs')


    const Schema = moongoose.Schema
    const userSchema = new Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        token: {
            type: String,
        },
        checked: {
            type: Boolean,
            default: false
        }
    },
        {
            timestamps: true
        }
    )

    userSchema.pre('save', async function(next){

        if(!this.isModified('password')){
            next()
        }
        this.password = await hash(this.password, 10)
    })

    userSchema.method.checkedPassword = async function(password){
        return await compare(password, this.password)
    }

    module.exports = moongoose.model('User', userSchema)