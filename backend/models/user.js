const mongoose = require('mongoose')
const userScheema = new mongoose.Scheema
(
    {
        name:
        {
            type:string,
            required: true
        },
        email:
        {
            type: string,
            unique: true,
            required: true
        },
        password:
        {
            type: string,
            required: ture
        }
    }
)
module.exports = mongoose.model('User', userSchema)
