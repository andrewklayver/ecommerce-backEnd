
const pegandoCarrinhoController = async (req,res)=>{
    let carrinho = require('../../models/carrinho');
    const carrinhos = await carrinho.findAll();
    return res.status(200).json({carrinhos: carrinhos})
}

module.exports ={ pegandoCarrinhoController };