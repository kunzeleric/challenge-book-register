const Livro = require('../models/Livro');

class LivroController {
    static getBooks = async (req, res) => {
        try {
            let livros = await Livro.find();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static insertBook = async (req, res) => {
        try {
            let livro = await Livro.create(req.body);
            res.status(201).json({livro, msg: 'Book successfully inserted.'})
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = LivroController;