const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Servir arquivos estáticos
app.use(express.static('.'));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(PORT, () => {
    console.log(`Frontend servido em http://localhost:${PORT}`);
});