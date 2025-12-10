const Book = require('../Model/userSchema.js');

const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: "Error creating book" });
  }
};

const getBooks = async (req, res) => {
  try {
    const { genre } = req.query;

    let filter = {};

    if (genre) {
      filter.genre = genre;
    }

    const books = await Book.find(filter).sort({ publishedYear: 1 });

    res.json(books);

  } catch (err) {
    res.status(500).json({ error: "Error fetching books" });
  }
};


const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Error fetching book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBook)
      return res.status(404).json({ error: "Book not found" });

    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: "Error updating book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook)
      return res.status(404).json({ error: "Book not found" }); // send

    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting book" });
  }
};

module.exports = { createBook, getBooks, getBookById, updateBook, deleteBook
};
