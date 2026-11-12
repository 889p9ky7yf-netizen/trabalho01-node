const express = require('express')
const rotas = require('./controller/rotas')

const app = express()

const PORTA = 3023

// Conectar as rotas
app.use('/', rotas)

// Iniciar o servidor
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
})