const express = require('express');
const Router = express.Router();
const CategoryController = require('../controller/category');
const cors = require('cors');
const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         // cb(null, new Date().toISOString() + file.originalname);
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({ storage: storage })

Router

  .get('/', CategoryController.getCategory)
  .post('/insert', CategoryController.insertCategory)
  .patch('/:id_Category', CategoryController.updateCategory)
  .delete('/:id_Category', CategoryController.deleteCategory)
  // .get('/:id_Category', CategoryController.CategoryDetail)
  // .post('/insert', (req, res) => res.send('ini buku ke 1'))

module.exports = Router;