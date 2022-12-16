const criandoProdutoController = async(req,res) =>{
    let db = require("../../connection/db");
    let produto = require('../../models/produto');
    await db.sync() 
    const { titulo, descricao, valor} = req.body;
    const novoProduto = await produto.create({
     titulo, descricao, valor
    });
    return res.json({produto: novoProduto});
}

module.exports = criandoProdutoController;
