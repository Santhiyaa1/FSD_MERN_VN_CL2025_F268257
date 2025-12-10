const express = require("express");
const router = express.Router();

const bookController = require("../Controller/userController.js");

router.post("/add", bookController.createBook);
router.get("/get", bookController.getBooks);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
