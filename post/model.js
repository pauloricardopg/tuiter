const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        textContent: {
            type: String,
            required: [true, 'forneca um conteudo de texto'],
            maxlength: 1000000,
        },
        author: {
            type: String,
            required: [true, 'forneca nomo do autor'],
            maxlength: 20,
            minlength: 2,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'forneca usuario']
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)