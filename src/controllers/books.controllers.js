const Book = require("../models/book.model");

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const getBookByID = async (req, res) => {
    const {id} = req.params;
    try {
        const book = await Book.findById(id);
        if(!book) {
            return res.status(404).json("No se encuentra el libro con el identificador especificado.");
        };
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const getBookByAuthor = async (req,res) => {
    const {author} = req.params;
    try {
        const books = await Book.find({author: author});
        if(!books.lenght) {
            return res.status(404).json("No se encuentran libros del autor especificado.");
        };
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const getBookByPublisher = async (req,res) => {
    const {publisher} = req.params;
    try {
        const books = await Book.find({publisher: publisher});
        if(!books.lenght) {
            return res.status(404).json("No se encuentran libros de la editorial especificada.");
        };
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const getBookByYear = async (req,res) => {
    const {year} = req.params;
    try {
        const books = await Book.find({year: year});
        if(!books.lenght) {
            return res.status(404).json("No se encuentran libros publicados en el año especificado.");
        };
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const getBookByISBN = async (req, res) => {
    const {isbn} = req.params;
    try {
        const book = await Book.find({isbn: isbn});
        if(!book) {
            return res.status(404).json("No se encuentra el libro con el código ISBN especificado.");
        };
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const createBook = async(req,res) => {
    try {
        const book = new Book(req.body);
        const createdBook = await newBook.save();
        return res.status(201).json(createdBook);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const deleteBook = async(req,res) => {
    const {id} = req.params;
    try {
        const book = await Book.findByIdAndDelete(id);
        if(!book) {
            return res.status(404).json("El libro a borrar no se ha encontrado.");
        };
        return res.status(200).json(`Libro ${book.title} eliminado.`);
    } catch (error) {
        return res.status(500).json(error);
    };
};

const updateBook = async(req,res) => {
    const {id} = req.params;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if(!updatedBook) {
            return res.status(404).json("El libro a editar no se ha encontrado.")
        }
        return res.status(200).json(updatedBook);
    } catch (error) {
        return res.status(500).json(error);
    };
};

module.exports = {
    getAllBooks,
    getBookByID,
    getBookByAuthor,
    getBookByPublisher,
    getBookByYear,
    getBookByISBN,
    createBook,
    deleteBook,
    updateBook,
}