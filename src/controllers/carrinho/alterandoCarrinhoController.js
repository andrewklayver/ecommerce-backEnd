const alterandoCarrinhoController = async (req,res)=>{
    let carrinho = require('../../models/carrinho');
    const produto = require('../../models/produto');
    const id = req.params.id;
    const { nome, email } = req.body;
    const pessoa = await carrinho.findByPk(id, { include: curso}); 
    await carrinho.update({
        nome: nome || pessoa.nome,
        email: email || pessoa.email
      }, { where: { id: id }});
    const carrinhoAtualizado = await carrinho.findByPk(id);
    return res.json({carrinhoAtualizado: carrinhoAtualizado });
}

module.exports = alterandoCarrinhoController;