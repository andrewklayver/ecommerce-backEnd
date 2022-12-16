const criandoCarrinhoController = async(req,res) =>{
    let db = require("../../connection/db");
    let carrinho = require('../../models/carrinho');
    await db.sync() 
    const { usuario_id, produto_id, status } = req.body;
    const carrinhoExistente = await carrinho.findOne({ where: { produto_id: produto_id } });
    if(carrinhoExistente) {
        return res.json("Produto invalido!")
    }
    const novoCarrinho = await carrinho.create({
     usuario_id, produto_id, status
    });
    return res.json({carrinho: novoCarrinho});
}

module.exports = criandoCarrinhoController;
