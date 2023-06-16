const db = require('./src/config/connectionDB')
const express = require('express');

const app = express();
const PORT = "3000";

app.use(express.json());

function startServer() {
    app.listen(PORT, () => {
        console.log('Listening on port ' + PORT)
    })
}

db.then(() => {
    console.log('Connected to database!')
    startServer();
}).catch((error) => {
    console.error('Failed to connect to database!', error);
})