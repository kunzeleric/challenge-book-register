const express = require('express');
const LivroController = require('../controllers/LivroController')

const router = express.Router();

// buscar todos livros
router.get('/livros', LivroController.getBooks)
      .get('/livros/:id', LivroController.getBookById)
      .post('/livros', LivroController.insertBook)
      .put('/livros/:id', LivroController.updateBook)
      .delete('/livros/:id', LivroController.deleteBook);

module.exports = router;