const express = require('express');
const Router = express.Router();
const bookController = require('../controller/book');
const cors = require('cors');
const multer = require('multer');

Router

  .get('/', bookController.getBooks)
  .get('/:id_book', bookController.bookDetail)
  .post('/', bookController.insertBook)
  .patch('/:id', bookController.updateBook)
  .delete('/:id_book', bookController.deleteBook)
  // .post('/insert', (req, res) => res.send('ini buku ke 1'))

module.exports = Router;