
const express = require('express')

const router = express.Router()

// Rota inicial
router.get('/', (req, res) => {
    res.send('<h1>Bem-vindos!!</h1>')
});

// Rota sobre
router.get('/sobre', (req, res) => {
    res.send(`
        <h1>Sobre nossa empresa</h1>
        <p>Somos uma empresa de desenvolvimento de software.</p>
        <p>Nosso objetivo é criar soluções tecnológicas
        para facilitar o dia a dia dos clientes.</p>
    `)
})

// Rota de informação do produto
router.get('/informacao/:id/:produto', (req, res) => {

    const id = req.params.id
    const produto = req.params.produto

    res.send(`
        <h1>Informações do Produto</h1>
        <p>ID: ${id}</p>
        <p>Produto: ${produto}</p>
    `)

})

// Exportar as rotas
module.exports = router
