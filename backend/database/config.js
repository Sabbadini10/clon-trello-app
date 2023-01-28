const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        const connection =  await mongoose.connect(process.env.DB_CONECTED)
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`MongoDB connected in ${url}`)

    } catch (error) {
        console.log(`error: ${error.message}`)
    }
}

module.exports = connectDB