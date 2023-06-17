const db = require('./src/config/connectionDB')
const express = require('express');
const router = require('./src/routes/LivrosRoutes');
const cors = require('cors');

const app = express();
const PORT = "3000";

app.use(express.json());
app.use(cors())
app.use(router);


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