const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: false
    }
},
 {
    timestamps: true // timestamps: true adds createdAt and updatedAt fields to the schema
});

module.exports = mongoose.model('Post', postSchema);