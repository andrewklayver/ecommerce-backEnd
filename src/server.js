const express = require('express');
const usuarioRoute = require('../src/routes/usuario.routes');
const ProdutoRoute = require('../src/routes/produto.routes');
const CarrinhoRoute = require('../src/routes/carrinho.routes');
const app = express();
const port = 3000;
require("dotenv/config");

app.use(express.json());
app.use(usuarioRoute);
app.use(ProdutoRoute);
app.use(CarrinhoRoute);


app.listen(port, ()=>{
    console.log('Server is runner🚀');
})
