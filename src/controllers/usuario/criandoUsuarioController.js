const { hash } = require("bcrypt");

const criandoUsuarioController = async(req,res) =>{
    let db = require("../../connection/db");
    let usuario = require('../../models/usuario');
    await db.sync()
    const { nome, email, senha} = req.body;
    const senhaHash = await hash(senha,8);
    const novoUsuario = await usuario.create({
     nome, email, senha: senhaHash
    });  
    return res.json({usuario: novoUsuario});
}

module.exports = criandoUsuarioController;
