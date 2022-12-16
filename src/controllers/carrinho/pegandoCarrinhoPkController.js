
const pegandoCarrinhoPkController = async (req,res)=>{
    const curso = require('../../models/curso');
    let carrinho = require('../../models/carrinho');
    const id = req.params.id;
    const carrinhos = await carrinho.findByPk(id, { include: curso});
    return res.status(200).json({carrinhos: carrinhos})
}

module.exports =  pegandoCarrinhoPkController ;