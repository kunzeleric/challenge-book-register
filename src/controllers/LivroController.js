const Livro = require('../models/Livro');

class LivroController {

    // listar todos livros
    static getBooks = async (req, res) => {
        try {
            let livros = await Livro.find();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // inserir livro
    static insertBook = async (req, res) => {
        try {
            let livro = await Livro.create(req.body);
            res.status(201).json({ livro, msg: 'Book successfully inserted.' })
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // encontra e atualiza o livro pelo id
    static updateBook = async (req, res) => {
        const id = req.params.id;
        try {
            await Livro.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).json({ msg: 'Book updated successfully' });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // encontra e delete o livro pelo id
    static deleteBook = async (req, res) => {
        const id = req.params.id;
        try {
            await Livro.findByIdAndDelete(id);
            res.status(200).json({ msg: 'Book deleted successfully' });
        } catch (error) {
            res.status(500).json(error);
        }
    }

        // listar um livro pelo id
        static getBookById = async (req, res) => {
            const id = req.params.id;
            try {
                let livro = await Livro.findOne({_id: id});
                res.status(200).json({livro, msg:'Book found!'});
            } catch (error) {
                res.status(500).json(error);
            }
        }
    
}

module.exports = LivroController;