const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('assets'))
app.get('/', (req, res) => {
    console.log('obteniendo en /');
    const index = path.join(__dirname, 'assets/index.html');
    console.log(index);
    res.sendFile(index);
});

app.listen(6000, _ => {
    console.log('escuchando en 6000')
});