const mongoose = require('mongoose');

//@todo validation
// http/https regex /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

const BookSchema = new mongoose.Schema({
        title: String,
        author: String,
        link: String,
        number: Number
});

module.exports = mongoose.model('Books', BookSchema);