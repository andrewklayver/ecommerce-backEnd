const { compare } = require('bcrypt');

const loginProdutoController = async (req,res)=>{
    let produto = require('../../models/produto');
    const { email, senha } = req.body;
    const produtoExistente = await produto.findOne({ where: { email: email}});
    console.log(produtoExistente);
    if(!produtoExistente){
        return res.json({message: "email ou senha invalido"});
    }
    const senhaMatch = await compare(senha, produtoExistente.senha);
    if(!senhaMatch){
        return res.json({message: "email ou senha invalido"});
    }
    return res.json({produto: produtoExistente});
}

module.exports = loginProdutoController;


