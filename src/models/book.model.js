const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        author: {type: String, required: true},
        publisher: {type: String, required: false},
        year: {type: Number, required: false},
        isbn: {type: String, required: false},
    } , {
        timestamps: true,
        versionKey: false,
    },
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;