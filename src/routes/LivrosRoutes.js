const express = require('express');
const LivroController = require('../controllers/LivroController')

const router = express.Router();

// buscar todos livros
router.get('/livros', LivroController.getBooks)
      .post('/livros', LivroController.insertBook)

module.exports = router;