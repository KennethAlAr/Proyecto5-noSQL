const express = require("express");

const {
    getAllBooks,
    getBookByID,
    getBooksByTitle,
    getBookByAuthor,
    getBookByPublisher,
    getBookByYear,
    getBookByISBN,
    createBook,
    deleteBook,
    updateBook,
} = require("../controllers/books.controllers");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookByID);
router.get("/title/:title", getBooksByTitle);
router.get("/author/:author", getBookByAuthor);
router.get("/publisher/:publisher", getBookByPublisher);
router.get("/year/:year", getBookByYear);
router.get("/isbn/:isbn", getBookByISBN);
router.post("/", createBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

module.exports = router