
const pegandoProdutoPkController = async (req,res)=>{
    
    let produto = require('../../models/produto');
    const id = req.params.id;
    const produtos = await produto.findByPk(id);
    return res.status(200).json({produtos: produtos})
}

module.exports =  pegandoProdutoPkController ;