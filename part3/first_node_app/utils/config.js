require('dotenv').config()

const PORT = 3001
const MONGO_URI = process.env.MONGO_URI

module.exports = {
    MONGO_URI,
    PORT
}