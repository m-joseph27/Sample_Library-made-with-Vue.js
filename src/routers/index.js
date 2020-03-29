const express = require('express');
const book = require('./book');
const user = require('./user');
const category = require('./category');

const Router = express.Router();
Router
  .use('/book', book)
  .use('/user', user)
  .use('/category', category)

module.exports = Router;

// app.get('/book', (req, res) =>{
//   const page =  parseInt (req.query.page)
//   const limit = parseInt (req.query.limit)

//   const startIndex = (page - 1) * limit 
//   const endIndex = page * limit

//   const results = {}

//   if(endIndex < book.length){
//   results.next = {
//     page : page + 1,
//     limit : limit
//     }  app.get('/book', (req, res) =>{
//       const page =  parseInt (req.query.page)
//       const limit = parseInt (req.query.limit)
    
//       const startIndex = (page - 1) * limit 
//       const endIndex = page * limit
    
//       const results = {}
    
//       if(endIndex < book.length){
//       results.next = {
//         page : page + 1,
//         limit : limit
//         }
//       }
    
//       if(startIndex > 0){
//       results.previous = {
//         page : page - 1,
//         limit : limit
//         }
//       }
    
//       results.results = book.slice(startIndex, endIndex)
//       res.json(results)
//     })
//   results.previous = {
//     page : page - 1,
//     limit : limit
//     }
//   }

//   results.results = book.slice(startIndex, endIndex)
//   res.json(results)
// })
