const Books = require('../models/Books')

//@todo set up functions for the remaining http requests

exports.getBooks = async (req, res, next) => {
    const allBooks = await Books.find();
    res.status(200).json({ success: true, data: allBooks });
};

exports.getBook = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show book ${req.params.id}` });
};

exports.createBook = async (req, res, next) => {
    console.log(req.body)
    const book = await Books.create(req.body)
    console.log(req.body)
    res.status(201).json({ success: true, data: book });
};

exports.updateBook = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update book ${req.params.id}` });
};

exports.deleteBook = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete book ${req.params.id}` });
}