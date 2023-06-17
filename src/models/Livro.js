const mongoose = require('mongoose');

const schemaLivro = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    titulo: {
        type: String,
        required: true
    },
    num_paginas: {
        type: Number,
        default: 0
    },
    isbn: {
        type: String,
    },
    editora: {
        type: String
    }
})

const Livro = mongoose.model('Livro', schemaLivro);

module.exports = Livro;