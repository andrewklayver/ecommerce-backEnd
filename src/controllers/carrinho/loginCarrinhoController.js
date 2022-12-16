const { compare } = require('bcrypt');

const loginCarrinhoController = async (req,res)=>{
    let carrinho = require('../../models/carrinho');
    const { email, senha } = req.body;
    const carrinhoExistente = await carrinho.findOne({ where: { email: email}});
    console.log(carrinhoExistente);
    if(!carrinhoExistente){
        return res.json({message: "email ou senha invalido"});
    }
    const senhaMatch = await compare(senha, carrinhoExistente.senha);
    if(!senhaMatch){
        return res.json({message: "email ou senha invalido"});
    }
    return res.json({carrinho: carrinhoExistente});
}

module.exports = loginCarrinhoController;


