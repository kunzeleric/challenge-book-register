const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        const connection = mongoose.connect("mongodb+srv://kunzeleric:ejtt3rVzbMvlXWLZ@cluster0.rdtfrov.mongodb.net/?retryWrites=true&w=majority")
        return connection;
    } catch (error) {
        throw error;
    }
}

module.exports = connectToDatabase();