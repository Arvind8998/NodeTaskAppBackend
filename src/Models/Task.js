const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    description:{
        type: String,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{timestamps: true})

const Task = new mongoose.model('Task',taskSchema)

module.exports = Task